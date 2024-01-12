"use client";
import ProductForm from "@/components/ManagePBCS/ProductForm";
import Form from "@/components/form/Form";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useGetSingleProductQuery, useUpdateProductMutation } from "@/redux/features/product/productApi";
import { Button, Skeleton, message } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductEditPage = () => {
  const router = useRouter();
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({});
  const params = useParams();
  const { data: session } = useSession();
  const [updateProduct] = useUpdateProductMutation();
  const { isLoading, data } = useGetSingleProductQuery(
    {
      id: params.productId as string,
      params: {
        populate: "brand,category,subCategory",
      },
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.productId || !session?.accessToken,
    }
  );
  useEffect(() => {
    if (!data?.product) return;
    const defaultValues = {
      title: data?.product?.title,
      netWeight: data?.product?.netWeight,
      packetPerBox: data?.product?.packetPerBox,
      type: data?.product?.type,
      categoryId: data?.product?.categoryId,
      subCategoryId: data?.product?.subCategoryId,
      brandId: data?.product?.brandId,
      image: data?.product?.image,
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
      const file = obj["image"];
      delete obj["image"];
      const formData = new FormData();
      if (file) {
        formData.append("image", file as Blob);
      }
      for (const [key, value] of Object.entries(obj)) {
        formData.append(key, value as string);
      }
      message.loading("Updating...");
      try {
        const res = await updateProduct({
          id: params.productId as string,
          data: formData,
        }).unwrap();
        if (!!res) {
          message.destroy();
          message.success("Your request to update product has been sent successful");
          router.push("/admin/manage-products");
        }
      } catch (err: any) {
        message.destroy();
        message.warning("Failed to update product! try again");
      }
    } else {
      router.push("/admin/manage-products");
      message.success("Updated without any changes");
    }
  };
  return (
    <div>
      <GAActionBar title="Product Edit">
        <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Product" }, { label: "Edit" }]} />
      </GAActionBar>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Form submitHandler={submitHandler} defaultValues={defaultValues}>
          <div>
            <ProductForm />
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

export default ProductEditPage;
