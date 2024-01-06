import { Link } from "@/lib/router-events";
import { MenuProps } from "antd";
import { BiSolidUser } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";


export type MenuItem = Required<MenuProps>["items"][number];

export const adminMenuItems: MenuItem[] = [
  {
    label: "Accounts",
    key: "accounts",
    icon: <BiSolidUser />,
    children: [
      {
        label: <Link href={`/admin/profile`}>My Profile</Link>,
        key: `/admin/profile`,
      },
      {
        label: <Link href={`/admin/account-requests`}>Account Requests</Link>,
        key: `/admin/account-requests`,
      },
      {
        label: <Link href={`/admin/manage-customer`}>Manage Customers</Link>,
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
        label: <Link href={`/admin/quotation-requests`}>Quotation Requests</Link>,
        key: `/admin/quotation-requests`,
      },
      {
        label: <Link href={`/admin/quotation-given`}>Quotation Given</Link>,
        key: `/admin/quotation-given`,
      },
      {
        label: <Link href={`/admin/current-orders`}>Current Orders</Link>,
        key: `/admin/current-orders`,
      },
      {
        label: <Link href={`/admin/order-history`}>History</Link>,
        key: `/admin/order-history`,
      },
    ],
  },
  {
    label: "Management",
    key: "management",
    icon: <MdOutlineManageHistory />,
    children: [
      {
        label: <Link href={`/admin/manage-products`}>Manage Products</Link>,
        key: `/admin/manage-products`,
      },
      {
        label: <Link href={`/admin/manage-category`}>Manage Categories</Link>,
        key: `/admin/manage-category`,
      },
      {
        label: <Link href={`/admin/manage-sub-category`}>Manage Sub-Categories</Link>,
        key: `/admin/manage-sub-category`,
      },
      {
        label: <Link href={`/admin/manage-brand`}>Manage Brands</Link>,
        key: `/admin/manage-brand`,
      },
    ],
  },
  {
    label: "Bulk Upload",
    key: "bulk",
    icon: <IoMdCloudUpload />,
    children: [
      {
        label: <Link href={`/admin/bulk-image-upload`}>Image</Link>,
        key: `/admin/bulk-image-upload`,
      },
      {
        label: <Link href={`/admin/bulk-product-upload`}>Products</Link>,
        key: `/admin/bulk-product-upload`,
      },
      
    ],
  },
];
