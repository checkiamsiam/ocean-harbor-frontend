"use client";
import CategoryForm from "@/components/ManagePBCS/CategoryForm";
import Form from "@/components/form/Form";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useGetSingleCategoryQuery, useUpdateCategoryMutation } from "@/redux/features/category/categoryApi";
import { Button, Skeleton, message } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryEditPage = () => {
  const router = useRouter();
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({});
  const params = useParams();
  const { data: session } = useSession();
  const [updateCategory] = useUpdateCategoryMutation();
  const { isLoading, data } = useGetSingleCategoryQuery(
    {
      id: params.categoryId as string,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.categoryId || !session?.accessToken,
    }
  );
  useEffect(() => {
    if (!data?.category) return;
    const defaultValues = {
      title: data?.category?.title,
      icon: data?.category?.icon,
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
      const file = obj["icon"];
      delete obj["icon"];
      const formData = new FormData();
      if (file) {
        formData.append("icon", file as Blob);
      }
      for (const [key, value] of Object.entries(obj)) {
        formData.append(key, value as string);
      }
      message.loading("Updating...");
      try {
        const res = await updateCategory({
          id: params.categoryId as string,
          data: changedProperties,
        }).unwrap();
        if (!!res) {
          message.destroy();
          message.success("Your request to update category has been sent successful");
          router.push("/admin/manage-category");
        }
      } catch (err: any) {
        message.destroy();
        message.warning("Failed to update category! try again");
      }
    } else {
      router.push("/admin/manage-category");
      message.success("Updated without any changes");
    }
  };
  return (
    <div>
      <GAActionBar title="Category Edit">
        <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Category" }, { label: "Edit" }]} />
      </GAActionBar>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Form submitHandler={submitHandler} defaultValues={defaultValues}>
          <div>
            <CategoryForm />
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
