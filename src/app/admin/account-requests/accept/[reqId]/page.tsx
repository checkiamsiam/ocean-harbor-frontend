"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useAcceptAccountRequestMutation, useGetSingleAccountRequestQuery } from "@/redux/features/accountRequest/accoutRequestApi";
import { Button, Card, Input, List, Modal, Typography, message } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useState } from "react";

const AccountRequestDetailPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [passwordText, setPasswordText] = useState<string>("");
  const router = useRouter();
  const params = useParams();
  const { data: session } = useSession();
  const [acceptReq] = useAcceptAccountRequestMutation();
  const { isLoading, data } = useGetSingleAccountRequestQuery(
    {
      id: params.reqId as string,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.reqId || !session?.accessToken,
    }
  );

  const handleAccept = async () => {
    message.loading("Accepting...");
    try {
      const res = await acceptReq({
        id: params.reqId as string,
        password: passwordText,
      }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to accept registration has been sent successful");
        router.push("/admin/manage-customer");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to register! try again");
    }
    setOpenModal(false);
  };

  return (
    <div>
      <GAActionBar title="Customer Details">
        <GABreadCrumb items={[{ label: "Accounts" }, { label: "Manage Customer" }, { label: "Profile" }]} />
      </GAActionBar>
      <Card bordered loading={isLoading}>
        <List>
          <h1 className="text-heading text-primary capitalize">Basic Information</h1>
          <List.Item>
            <Typography.Text strong>Name: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.request?.name}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Email: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.request?.email}</Typography.Text>
          </List.Item>
          <h1 className="text-heading text-primary capitalize mt-5">Company Information</h1>
          <List.Item>
            <Typography.Text strong>Company Name:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.request?.companyName}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Company Type:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.request?.companyType}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Company Registration Number:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.request?.companyRegNo}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Company Details:</Typography.Text>
            <Typography.Paragraph className="w-3/5">{data?.request?.companyDetails}</Typography.Paragraph>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Tax Number:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.request?.taxNumber}</Typography.Text>
          </List.Item>
          <h1 className="text-heading text-primary capitalize mt-5">Contact Information</h1>
          <List.Item>
            <Typography.Text strong>Phone: </Typography.Text>
            <Typography.Text className="w-3/5">{data?.request?.phone}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Address:</Typography.Text>
            <Typography.Paragraph className="w-3/5">{data?.request?.address}</Typography.Paragraph>
          </List.Item>
          <List.Item>
            <Typography.Text strong>City:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.request?.city}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Country:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.request?.country}</Typography.Text>
          </List.Item>
          <h1 className="text-heading text-primary capitalize mt-5">Additional</h1>

          <List.Item>
            <Typography.Text strong>Message:</Typography.Text>
            <Typography.Text className="w-3/5">{data?.request?.message}</Typography.Text>
          </List.Item>
        </List>
      </Card>
      <div style={{ marginTop: 24 }}>
        <Button onClick={() => router.back()}>Back</Button>
        <Button type="primary" onClick={() => setOpenModal(true)} style={{ margin: "0 8px" }}>
          Approve
        </Button>
      </div>

      {/* accept modal here */}
      <Modal
        title="Are you sure you want to accept this request?"
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={[
          <Button key="cancel" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleAccept}>
            Approve
          </Button>,
        ]}
      >
        <p className="mb-3">Press &apos;Approve&apos; to accept this registration or &apos;Cancel&apos; to back to previous page</p>
        <span>Set Password</span>
        <Input.Password value={passwordText} type="password" placeholder="set password" onChange={(e) => setPasswordText(e.target.value)} />
      </Modal>
    </div>
  );
};

export default AccountRequestDetailPage;
