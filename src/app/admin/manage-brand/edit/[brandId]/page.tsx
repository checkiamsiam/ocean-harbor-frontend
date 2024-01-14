"use client";
import BrandForm from "@/components/ManagePBCS/BrandForm";
import Form from "@/components/form/Form";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useGetSingleBrandQuery, useUpdateBrandMutation } from "@/redux/features/brand/brandApi";
import { Button, Skeleton, message } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryEditPage = () => {
  const router = useRouter();
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({});
  const params = useParams();
  const { data: session } = useSession();
  const [updateCategory] = useUpdateBrandMutation();
  const { isLoading, data } = useGetSingleBrandQuery(
    {
      id: params.brandId as string,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.brandId || !session?.accessToken,
    }
  );

  useEffect(() => {
    if (!data?.brand) return;
    const defaultValues = {
      title: data?.brand?.title,
      logo: data?.brand?.logo,
    };
    setDefaultValues(defaultValues);
  }, [data]);

  const submitHandler = async (values: any) => {
    const changedProperties: any = Object.fromEntries(
      Object.keys(values)
        .filter((key) => values[key] !== defaultValues[key])
        .map((key) => [key, values[key]])
    );

    if (Object.keys(changedProperties).length > 0) {
      const obj = { ...changedProperties };
      const file = obj["logo"];
      delete obj["logo"];
      const formData = new FormData();
      if (file) {
        formData.append("logo", file as Blob);
      }
      for (const [key, value] of Object.entries(obj)) {
        formData.append(key, value as string);
      }
      message.loading("Updating...");
      try {
        const res = await updateCategory({
          id: params.brandId as string,
          data: changedProperties,
        }).unwrap();
        if (!!res) {
          message.destroy();
          message.success("Your request to update brand has been sent successful");
          router.push("/admin/manage-brand");
        }
      } catch (err: any) {
        message.destroy();
        message.warning("Failed to update brand! try again");
      }
    } else {
      router.push("/admin/manage-brand");
      message.success("Updated without any changes");
    }
  };
  return (
    <div>
      <GAActionBar title="Brand Edit">
        <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Brand" }, { label: "Edit" }]} />
      </GAActionBar>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Form submitHandler={submitHandler} defaultValues={defaultValues}>
          <div>
            <BrandForm />
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

export default CategoryEditPage;
