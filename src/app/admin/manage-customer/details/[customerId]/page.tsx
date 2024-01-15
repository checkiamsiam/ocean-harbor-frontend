"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useGetSingleCustomersQuery } from "@/redux/features/user/userApi";
import { OrderStatus } from "@/types/ApiResponse";
import { Card, List, Typography } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

const CustomerDetails = () => {
  const params = useParams();
  const { data: session } = useSession();
  const { isLoading, data } = useGetSingleCustomersQuery(
    {
      id: params.customerId as string,
      params: {
        populate: "user,orders",
      },
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.customerId || !session?.accessToken,
    }
  );

  return (
    <div>
      <GAActionBar title="Customer Details">
        <GABreadCrumb items={[{ label: "Accounts" }, { label: "Manage Customer" }, { label: "Profile" }]} />
      </GAActionBar>
      <Card bordered loading={isLoading}>
        <List>
          <h1 className="text-heading text-primary capitalize">Account Profile</h1>
          <List.Item>
            <Typography.Text strong>Name: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?.name}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Email: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?.user?.email}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Username: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?.user?.username}</Typography.Text>
          </List.Item>
          <h1 className="text-heading text-primary capitalize mt-5">Company Profile</h1>
          <List.Item>
            <Typography.Text strong>Company Name:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?.companyName}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Company Type:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?.companyType}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Company Registration Number:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?.companyRegNo}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Company Details:</Typography.Text>
            <Typography.Paragraph className="w-3/5">{data?.customer?.companyDetails}</Typography.Paragraph>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Tax Number:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?.taxNumber}</Typography.Text>
          </List.Item>
          <h1 className="text-heading text-primary capitalize mt-5">Contact Information</h1>
          <List.Item>
            <Typography.Text strong>Phone: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?.phone}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Address:</Typography.Text>
            <Typography.Paragraph className="w-3/5">{data?.customer?.address}</Typography.Paragraph>
          </List.Item>
          <List.Item>
            <Typography.Text strong>City:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?.city}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Country:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?.country}</Typography.Text>
          </List.Item>
          <h1 className="text-heading text-primary capitalize mt-5">Order States</h1>

          <List.Item>
            <Typography.Text strong>Total Orders:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.customer?._count?.orders}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Quotation Requests:</Typography.Text>
            <Typography.Text className="w-3/5">
              {data?.customer?.orders?.filter((order) => order.status === OrderStatus.requestQuotation).length}
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Quotation Sended:</Typography.Text>
            <Typography.Text className="w-3/5">
              {data?.customer?.orders?.filter((order) => order.status === OrderStatus.quotationApproved).length}
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Order Confirmed:</Typography.Text>
            <Typography.Text className="w-3/5">
              {data?.customer?.orders?.filter((order) => order.status === OrderStatus.ordered).length}
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Declined or Ignored:</Typography.Text>
            <Typography.Text className="w-3/5">
              {data?.customer?.orders?.filter((order) => order.status === OrderStatus.declined || order.status === OrderStatus.spam).length}
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Order In Queue(not delivered yet):</Typography.Text>
            <Typography.Text className="w-3/5">
              {data?.customer?.orders?.filter((order) => order.status === OrderStatus.orderInProcess).length}
            </Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Order Completed:</Typography.Text>
            <Typography.Text className="w-3/5">
              {data?.customer?.orders?.filter((order) => order.status === OrderStatus.delivered).length}
            </Typography.Text>
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default CustomerDetails;
