import { Link } from "@/lib/router-events";
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
        label: <Link href={`/dashboard/quotation-approved`}>Quotation Approved</Link>,
        key: `/dashboard/quotation-approved`,
      },
      {
        label: <Link href={`/dashboard/order-in-queue`}>Order In Queue</Link>,
        key: `/dashboard/order-in-queue`,
      },
      {
        label: <Link href={`/dashboard/order-history`}>History</Link>,
        key: `/dashboard/order-history`,
      },
    ],
  },
];
