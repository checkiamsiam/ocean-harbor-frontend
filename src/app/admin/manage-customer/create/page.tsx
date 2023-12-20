"use client";
import CompanyInfo from "@/components/CustomerForms/CompanyInfo";
import ContactInfo from "@/components/CustomerForms/ContactInfo";
import CustomerInfo from "@/components/CustomerForms/CustomerInfo";
import StepperForm from "@/components/form/StepperForm";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useAddCustomerMutation } from "@/redux/features/user/userApi";
import addCustomerValidation from "@/schema/addCustomer.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { message } from "antd";

const CreateCustomerPage = () => {
  const [addCustomerWithFormData] = useAddCustomerMutation();
  const steps = [
    {
      title: "Basic Information",
      content: <CustomerInfo />,
    },
    {
      title: "Company Information",
      content: <CompanyInfo />,
    },
    {
      title: "Contact Information",
      content: <ContactInfo />,
    },
  ];

  const handleCustomerSubmit = async (values: any) => {
    message.loading("Creating...");
    try {
      const res = await addCustomerWithFormData(values).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to add customer has been sent successful");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to add new customer! try again");
    }
  };
  return (
    <div>
      <GAActionBar title="Create Customer">
        <div className="mt-3">
          <GABreadCrumb items={[{ label: "Accounts" }, { label: "Manage Customer" }, { label: "Add" }]} />
        </div>
      </GAActionBar>
      <StepperForm
        persistKey="ga-customer-create-form"
        submitHandler={(value) => {
          handleCustomerSubmit(value);
        }}
        navigateLink="/admin/manage-customer"
        steps={steps}
        resolver={zodResolver(addCustomerValidation)}
      />
    </div>
  );
};

export default CreateCustomerPage;
