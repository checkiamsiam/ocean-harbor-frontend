"use client";
import CompanyInfo from "@/components/CustomerForms/CompanyInfo";
import ContactInfo from "@/components/CustomerForms/ContactInfo";
import CustomerInfo from "@/components/CustomerForms/CustomerInfo";
import Form from "@/components/form/Form";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useGetSingleCustomersQuery, useUpdateCustomerMutation } from "@/redux/features/user/userApi";
import { Button, Skeleton, message } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CustomerEditPage = () => {
  const router = useRouter();
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({});
  const params = useParams();
  const { data: session } = useSession();
  const [updateCustomer] = useUpdateCustomerMutation();
  const { isLoading, data } = useGetSingleCustomersQuery(
    {
      id: params.customerId as string,
      params: {
        populate: "user",
      },
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.customerId || !session?.accessToken,
    }
  );
  useEffect(() => {
    if (!data?.customer) return;
    const { id, createdAt, updatedAt, user, _count, ...rest } = data?.customer;
    const defaultValues = { ...rest, email: data?.customer?.user?.email, password: data?.customer?.user?.password };
    setDefaultValues(defaultValues);
  }, [data]);

  const submitHandler = async (values: any) => {
    const changedProperties = Object.fromEntries(
      Object.keys(values)
        .filter((key) => values[key] !== defaultValues[key])
        .map((key) => [key, values[key]])
    );

    if (Object.keys(changedProperties).length > 0) {
      message.loading("Updating...");
      try {
        const res = await updateCustomer({
          id: params.customerId as string,
          data: changedProperties,
        }).unwrap();
        if (!!res) {
          message.destroy();
          message.success("Your request to update customer has been sent successful");
          router.push("/admin/manage-customer");
        }
      } catch (err: any) {
        message.destroy();
        message.warning("Failed to update new customer! try again");
      }
    } else {
      router.push("/admin/manage-customer");
      message.success("Updated without any changes");
    }
  };
  return (
    <div>
      <GAActionBar title="Customer Edit">
        <GABreadCrumb items={[{ label: "Accounts" }, { label: "Manage Customer" }, { label: "Edit" }]} />
      </GAActionBar>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Form submitHandler={submitHandler} defaultValues={defaultValues}>
          <div>
            <CustomerInfo />
            <CompanyInfo />
            <ContactInfo />
          </div>
          <div style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default CustomerEditPage;
