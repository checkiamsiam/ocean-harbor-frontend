"use client";
import { Link } from "@/lib/router-events";
import { setCurrentOrderId, toggleOrderItemDrawer } from "@/redux/features/dashboard/dashboardSlice";
import { useGetSingleOrderQuery } from "@/redux/features/order/orderApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { UserRole } from "@/types/ApiResponse";
import { Drawer, List } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";

const OrderItemsDrawer = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const { currentOrderId, orderItemDrawerOpen } = useAppSelector((state) => state.customerDashboard);
  const { data, isLoading } = useGetSingleOrderQuery(
    {
      id: currentOrderId,
      params: {
        populate: "products",
      },
    },
    {
      skip: !currentOrderId,
    }
  );
  const onClose = () => {
    dispatch(toggleOrderItemDrawer());
    dispatch(setCurrentOrderId(""));
  };
  return (
    <div>
      <Drawer title="Order Items" placement="right" onClose={onClose} open={orderItemDrawerOpen}>
        <List loading={isLoading}>
          {data?.order?.products &&
            data?.order?.products.map((product, id) => (
              <List.Item key={id}>
                <div className="flex gap-5 w-4/5">
                  <span>
                    <Image src={product?.product?.image} alt="" width={50} height={50} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span>
                      <Link
                        href={
                          session?.user?.role === UserRole.admin
                            ? `/admin/manage-products/details/${product?.product?.id}`
                            : `/product/${product?.product?.id}`
                        }
                        className="text-sm underline  text-secondary"
                      >
                        {product?.product?.title}
                      </Link>
                    </span>
                    <span>
                      <p className="text-sm text-secondary ">
                        {product?.product?.packetPerBox} x {product?.product?.netWeight}
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 w-1/5">X {product?.quantity}</div>
              </List.Item>
            ))}
        </List>
      </Drawer>
    </div>
  );
};

export default OrderItemsDrawer;
