"use client";
import { useGetUnreadNotificationQuery } from "@/redux/features/notification/notificationApi";
import { Popover } from "antd";
import { useSession } from "next-auth/react";
import { IoNotifications } from "react-icons/io5";
import NotificationPopover from "./NotificationPopover";

const NotificationButton = () => {
  const { data: session } = useSession();

  const { data, isLoading } = useGetUnreadNotificationQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  return (
    <div>
      <Popover placement="bottomRight" content={NotificationPopover} trigger="click">
        <span className="text-white cursor-pointer flex justify-center gap-2 items-center hover:text-primary relative">
          <IoNotifications className="text-icon" />
          {!isLoading && data && data?.count > 0 && (
            <span
              className="
              absolute
              -top-1
              -right-1
              bg-red-500
              rounded-full
              w-4
              h-4
              text-xs
              text-white
              flex
              justify-center
              items-center
            "
            >
              {data?.count > 9 ? "9+" : data?.count}
            </span>
          )}
        </span>
      </Popover>
    </div>
  );
};

export default NotificationButton;
