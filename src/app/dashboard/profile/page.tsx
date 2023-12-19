"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useProfileQuery } from "@/redux/features/user/userApi";
import { Card, List, Typography } from "antd";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  const { isLoading, data } = useProfileQuery(null, {
    refetchOnMountOrArgChange: true,
    skip: !session?.accessToken,
  });
  return (
    <div>
      <GAActionBar title="Account Profile" >
        <GABreadCrumb items={[{ label: "Account" }, { label: "Profile" }]} />
      </GAActionBar>
      <Card bordered loading={isLoading}>
        <List>
          <List.Item>
            <Typography.Text strong>Name: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.user?.customer?.name}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Email: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.user?.email}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Username: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.user?.username}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Phone: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.user?.customer?.phone}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Company Name:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.user?.customer?.companyName}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Company Type:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.user?.customer?.companyType}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Company Registration Number:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.user?.customer?.companyRegNo}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Company Details:</Typography.Text>
            <Typography.Paragraph className="w-3/5">
              {data?.user?.customer?.companyDetails}
            </Typography.Paragraph>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Tax Number:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.user?.customer?.taxNumber}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Address:</Typography.Text>
            <Typography.Paragraph className="w-3/5">{data?.user?.customer?.address}</Typography.Paragraph>
          </List.Item>
          <List.Item>
            <Typography.Text strong>City:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.user?.customer?.city}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Country:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.user?.customer?.country}</Typography.Text>
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default Profile;
