"use client";
import ProductForm from "@/components/ManagePBCS/ProductForm";
import Form from "@/components/form/Form";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useAddProductMutation } from "@/redux/features/product/productApi";
import addProductSchema from "@/schema/addProduct.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, message } from "antd";

const CreateProductPage = () => {
  const router = useRouter();
  const [addProduct] = useAddProductMutation();
  const submitHandler = async (values: any) => {
    const obj = { ...values };
    const file = obj["image"];
    delete obj["image"];
    if (!file) {
      message.warning("Please upload Image");
      throw new Error("Please upload Image");
    }
    const formData = new FormData();
    formData.append("image", file as Blob);
    for (const [key, value] of Object.entries(obj)) {
      formData.append(key, value as string);
    }

    message.loading("Adding...");
    try {
      const res = await addProduct({ data: formData }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to add product has been sent successful");
        router.push("/admin/manage-products");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to add new product! try again");
    }
  };
  return (
    <div>
      <GAActionBar title="Create Customer">
        <div className=" ">
          <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Product" }, { label: "Add" }]} />
        </div>
      </GAActionBar>
      <Form submitHandler={submitHandler} resolver={zodResolver(addProductSchema)}>
        <ProductForm />
        <div style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateProductPage;
