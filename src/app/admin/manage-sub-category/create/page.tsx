"use client";
import SubCategoryForm from "@/components/ManagePBCS/SubCategoryForm";
import Form from "@/components/form/Form";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useRouter } from "@/lib/router-events";
import { useAddSubCategoryMutation } from "@/redux/features/subCategory/subCategoryApi";
import addSubCategoryValidation from "@/schema/addSubCategory.schema copy";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, message } from "antd";

const SubCreateCategoryPage = () => {
  const router = useRouter();
  const [addSubCategory] = useAddSubCategoryMutation();
  const submitHandler = async (values: any) => {
    const obj = { ...values };
    const file = obj["icon"];
    delete obj["icon"];
    const formData = new FormData();
    formData.append("icon", file as Blob);
    for (const [key, value] of Object.entries(obj)) {
      formData.append(key, value as string);
    }

    message.loading("Adding...");
    try {
      const res = await addSubCategory({ data: formData }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to add sub-category has been sent successful");
        router.push("/admin/manage-sub-category");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to add new sub-category! try again");
    }
  };
  return (
    <div>
      <GAActionBar title="Create Sub-Category">
        <div className=" ">
          <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Sub-Category" }, { label: "Add" }]} />
        </div>
      </GAActionBar>
      <Form submitHandler={submitHandler} resolver={zodResolver(addSubCategoryValidation)}>
        <SubCategoryForm />
        <div style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SubCreateCategoryPage;
