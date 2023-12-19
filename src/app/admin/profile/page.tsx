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
            <Typography.Text className="w-3/5">{data?.user?.admin?.name}</Typography.Text>
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
            <Typography.Text className="w-3/5">{data?.user?.admin?.phone}</Typography.Text>
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default Profile;
