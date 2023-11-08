"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import GAButton from "@/components/ui/GAButton";
import { Card } from "antd";
import Link from "next/link";

const RegistrationRequestForm = () => {
  const submitHandler = (data: any) => {
    console.log("submited");
  };
  return (
    <div className="ga-container">
      <div className="py-10">
        <div className="max-w-xl mx-auto">
          <Card>
            <h1 className="text-[2rem] mb-5 text-primary">Request An Account</h1>

            <Form submitHandler={submitHandler}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <FormSelectField
                    name="companyType"
                    label="Company Type"
                    size="large"
                    options={[
                      { label: "Shop", value: "shop" },
                      { label: "Wholesale", value: "wholesale" },
                    ]}
                    defaultValue={{ label: "Shop", value: "shop" }}
                    style={{
                      width: "200px",
                    }}
                  />
                </div>
                <div>
                  <FormInput name="company" required label="Company Name" size="large" />
                </div>
                <div>
                  <FormInput name="address" required label="Address" size="large" />
                </div>
                <div>
                  <FormInput name="city" required label="City" size="large" />
                </div>
                <div>
                  <FormInput name="country" required label="Country" size="large" />
                </div>
                <div>
                  <FormInput name="email" required label="Email" size="large" />
                </div>
                <div>
                  <FormInput name="phone" required label="Phone" size="large" />
                </div>
                
                <div>
                  <FormTextArea name="message" required label="Message" rows={5} />
                </div>

                <p className="text-center">
                  <Link href="/login" className="text-primary underline hover:text-primary">
                    Already have? Just Sign in
                  </Link>
                </p>

                <div className="flex justify-end">
                  <GAButton htmlType="submit" size="large" arrow>
                    Send Request
                  </GAButton>
                </div>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegistrationRequestForm;
