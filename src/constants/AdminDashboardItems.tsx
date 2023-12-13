import { Link } from "@/lib/router-events";
import { OrderStatus } from "@/types/ApiResponse";
import { MenuProps } from "antd";
import { BiSolidUser } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineManageHistory } from "react-icons/md";


export type MenuItem = Required<MenuProps>["items"][number];

export const adminMenuItems: MenuItem[] = [
  {
    label: "Accounts",
    key: "accounts",
    icon: <BiSolidUser />,
    children: [
      {
        label: <Link href={`/admin/account-requests`}>Requests</Link>,
        key: `/admin/account-requests`,
      },
      {
        label: <Link href={`/admin/manage-customer`}>Manage Customer</Link>,
        key: `/admin/manage-customer`,
      },
    ],
  },
  {
    label: "Orders",
    key: "Order",
    icon: <IoBagCheckOutline />,
    children: [
      {
        label: <Link href={`/admin/quotation?status=${OrderStatus.requestQuotation}`}>Quotation Requests</Link>,
        key: `/admin/quotation?status=${OrderStatus.requestQuotation}`,
      },
      {
        label: <Link href={`/admin/quotation?status=${OrderStatus.quotationApproved}`}>Quotation Given</Link>,
        key: `/admin/quotation?status=${OrderStatus.quotationApproved}`,
      },
      {
        label: <Link href={`/admin/order?status=${OrderStatus.ordered}`}>Confirmed Order</Link>,
        key: `/admin/order?status=${OrderStatus.ordered}`,
      },
      {
        label: <Link href={`/admin/order?status=${OrderStatus.declined}`}>Declined Order</Link>,
        key: `/admin/order?status=${OrderStatus.declined}`,
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
  {
    label: "Management",
    key: "management",
    icon: <MdOutlineManageHistory />,
    children: [
      {
        label: <Link href={`/admin/products`}>Manage Products</Link>,
        key: `/admin/products`,
      },
      {
        label: <Link href={`/admin/category`}>Manage Categories</Link>,
        key: `/admin/category`,
      },
      {
        label: <Link href={`/admin/sub-category`}>Manage Sub-Categories</Link>,
        key: `/admin/sub-category`,
      },
      {
        label: <Link href={`/admin/brand`}>Manage Brands</Link>,
        key: `/admin/brand`,
      },
    ],
  },
];
