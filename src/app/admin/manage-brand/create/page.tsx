"use client";
import BrandForm from "@/components/ManagePBCS/BrandForm";
import Form from "@/components/form/Form";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useAddBrandMutation } from "@/redux/features/brand/brandApi";
import addBrandValidation from "@/schema/addBrand.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, message } from "antd";

const CreateBrandPage = () => {
  const router = useRouter();
  const [addBrand] = useAddBrandMutation();
  const submitHandler = async (values: any) => {
    const obj = { ...values };
    const file = obj["logo"];
    delete obj["logo"];
    if (!file) {
      message.warning("Please upload Image");
      throw new Error("Please upload Image");
    }
    const formData = new FormData();
    formData.append("logo", file as Blob);
    for (const [key, value] of Object.entries(obj)) {
      formData.append(key, value as string);
    }

    message.loading("Adding...");
    try {
      const res = await addBrand({ data: formData }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to add brand has been sent successful");
        router.push("/admin/manage-brand");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to add new brand! try again");
    }
  };
  return (
    <div>
      <GAActionBar title="Create Brand">
        <div className=" ">
          <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Brand" }, { label: "Add" }]} />
        </div>
      </GAActionBar>
      <Form submitHandler={submitHandler} resolver={zodResolver(addBrandValidation)}>
        <BrandForm />
        <div style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateBrandPage;
