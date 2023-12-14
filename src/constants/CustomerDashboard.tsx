import { Link } from "@/lib/router-events";
import { OrderStatus } from "@/types/ApiResponse";
import { MenuProps } from "antd";
import { BiSolidUser } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";

export type MenuItem = Required<MenuProps>["items"][number];

export const customerDashboardItems: MenuItem[] = [
  {
    label: "Accounts",
    key: "accounts",
    icon: <BiSolidUser />,
    children: [
      {
        label: <Link href={`/admin/account-requests`}>Profile</Link>,
        key: `/admin/account-requests`,
      },
    ],
  },
  {
    label: "Orders",
    key: "Order",
    icon: <IoBagCheckOutline />,
    children: [
      {
        label: <Link href={`/dashboard/quotation-requests`}>Quotation Requests</Link>,
        key: `/dashboard/quotation-requests`,
      },
      {
        label: <Link href={`/admin/quotation?status=${OrderStatus.quotationApproved}`}>Quotation Approved</Link>,
        key: `/admin/quotation?status=${OrderStatus.quotationApproved}`,
      },
      {
        label: <Link href={`/admin/order?status=${OrderStatus.orderInProcess}`}>Order In Queue</Link>,
        key: `/admin/order?status=${OrderStatus.orderInProcess}`,
      },
      {
        label: <Link href={`/admin/order?status=${OrderStatus.delivered}`}>History</Link>,
        key: `/admin/order?status=${OrderStatus.delivered}`,
      },
    ],
  },
];
