"use client";
import GAButton from "@/components/ui/GAButton";
import { useRouter } from "@/lib/router-events";
import { useGetNotificationQuery, useMarkAllAsReadMutation, useMarkAsReadMutation } from "@/redux/features/notification/notificationApi";
import { AdminNotification, AdminNotificationType, CustomerNotification, CustomerNotificationType, UserRole } from "@/types/ApiResponse";
import { Skeleton } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import ReactTimeago from "react-timeago";

const NotificationPopover = () => {
  const router = useRouter();
  const [limit, setLimit] = useState(10);
  const { data: session } = useSession();

  const [markAsRead] = useMarkAsReadMutation();
  const [markAllAsRead] = useMarkAllAsReadMutation();
  const { data, isLoading } = useGetNotificationQuery(
    { params: { limit } },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const handleNotificationClick = async (notification: any) => {
    await markAsRead({
      id: notification.id,
    });
    if (session && session.user?.role === UserRole.admin) {
      const adminNotification = notification as AdminNotification;
      if (adminNotification.type === AdminNotificationType.AccountRequest) {
        router.push(`/admin/account-requests?id=${adminNotification.refId}`);
      }
      if (adminNotification.type === AdminNotificationType.quotationRequest) {
        router.push(`/admin/quotation-requests?id=${adminNotification.refId}`);
      }
      if (adminNotification.type === AdminNotificationType.confirmOrder) {
        router.push(`/admin/current-orders?id=${adminNotification.refId}`);
      }
      if (adminNotification.type === AdminNotificationType.declineOrder) {
        router.push(`/admin/order-history?id=${adminNotification.refId}`);
      }
    } else {
      const customerNotification = notification as CustomerNotification;
      if (customerNotification.type === CustomerNotificationType.quotationApproved) {
        router.push(`/dashboard/quotation-approved?id=${customerNotification.refId}`);
      }
      if (customerNotification.type === CustomerNotificationType.quotationDeclined) {
        router.push(`/dashboard/order-history?id=${customerNotification.refId}`);
      }
      if (customerNotification.type === CustomerNotificationType.invoiceAdded) {
        router.push(`/dashboard/order-in-queue?id=${customerNotification.refId}`);
      }
    }
  };

  return (
    <div className="sm:w-[400px] w-[220px] h-[400px]  overflow-y-auto ">
      <div className="flex flex-wrap justify-between items-center">
        <h3>Notification</h3>
        <GAButton size="small" onClick={() => markAllAsRead({})}>
          Mark As Read
        </GAButton>
      </div>

      {!data && isLoading ? (
        <Skeleton active />
      ) : (
        <div className="mt-2">
          <h5>Earlier</h5>
          <div className="mt-2">
            {data?.notifications.map((notification) => (
              <div
                onClick={() => handleNotificationClick(notification)}
                key={notification?.id}
                className={`flex items-center mt-2 hover:bg-gray-200 ${
                  notification.read ? "bg-gray-50" : "bg-gray-200"
                } rounded-lg p-2 cursor-pointer w-full`}
              >
                <div className="ml-3">
                  <div className="flex gap-10 justify-between">
                    <p className="font-semibold text-sm">{notification?.title}</p>
                    <p className="text-sm text-blue-500 ">{notification?.createdAt && <ReactTimeago date={notification?.createdAt} />}</p>
                  </div>
                  <p className="text-sm">{notification?.message}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <GAButton className="w-full mt-2" onClick={() => setLimit(limit + 10)}>
              Load More
            </GAButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPopover;
