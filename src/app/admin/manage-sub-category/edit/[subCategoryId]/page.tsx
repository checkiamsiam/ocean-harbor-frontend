"use client";
import SubCategoryForm from "@/components/ManagePBCS/SubCategoryForm";
import Form from "@/components/form/Form";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useGetSingleSubCategoryQuery, useUpdateSubCategoryMutation } from "@/redux/features/subCategory/subCategoryApi";
import { Button, Skeleton, message } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryEditPage = () => {
  const router = useRouter();
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({});
  const params = useParams();
  const { data: session } = useSession();
  const [updateSubCategory] = useUpdateSubCategoryMutation();
  const { isLoading, data } = useGetSingleSubCategoryQuery(
    {
      id: params.subCategoryId as string,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.subCategoryId || !session?.accessToken,
    }
  );
  useEffect(() => {
    if (!data?.subCategory) return;
    const defaultValues = {
      title: data?.subCategory?.title,
      categoryId: data?.subCategory?.categoryId,
      icon: data?.subCategory?.icon,
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
        const res = await updateSubCategory({
          id: params.subCategoryId as string,
          data: changedProperties,
        }).unwrap();
        if (!!res) {
          message.destroy();
          message.success("Your request to update sub-category has been sent successful");
          router.push("/admin/manage-sub-category");
        }
      } catch (err: any) {
        message.destroy();
        message.warning("Failed to update sub-category! try again");
      }
    } else {
      router.push("/admin/manage-sub-category");
      message.success("Updated without any changes");
    }
  };
  return (
    <div>
      <GAActionBar title="Sub-Category Edit">
        <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Sub-Category" }, { label: "Edit" }]} />
      </GAActionBar>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Form submitHandler={submitHandler} defaultValues={defaultValues}>
          <div>
            <SubCategoryForm />
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
