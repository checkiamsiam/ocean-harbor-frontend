"use client";
import CategoryForm from "@/components/ManagePBCS/CategoryForm";
import Form from "@/components/form/Form";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useAddCategoryMutation } from "@/redux/features/category/categoryApi";
import addCategoryValidation from "@/schema/addCategory.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, message } from "antd";

const CreateCategoryPage = () => {
  const router = useRouter();
  const [addCategory] = useAddCategoryMutation();
  const submitHandler = async (values: any) => {
    const obj = { ...values };
    const file = obj["icon"];
    delete obj["icon"];
    if (!file) {
      message.warning("Please upload Image");
      throw new Error("Please upload Image");
    }
    const formData = new FormData();
    formData.append("icon", file as Blob);
    for (const [key, value] of Object.entries(obj)) {
      formData.append(key, value as string);
    }

    message.loading("Adding...");
    try {
      const res = await addCategory({ data: formData }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to add category has been sent successful");
        router.push("/admin/manage-category");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to add new category! try again");
    }
  };
  return (
    <div>
      <GAActionBar title="Create Category">
        <div className=" ">
          <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Category" }, { label: "Add" }]} />
        </div>
      </GAActionBar>
      <Form submitHandler={submitHandler} resolver={zodResolver(addCategoryValidation)}>
        <CategoryForm />
        <div style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateCategoryPage;
