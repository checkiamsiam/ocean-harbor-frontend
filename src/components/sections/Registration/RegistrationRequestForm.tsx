"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import FormSelectField from "@/components/form/FormSelectField";
import FormTextArea from "@/components/form/FormTextArea";
import GAButton from "@/components/ui/GAButton";
import { Link, useRouter } from "@/lib/router-events";
import { IAccReq, useAccountRequestMutation } from "@/redux/features/accountRequest/accoutRequestApi";
import accountRequestValidation from "@/schema/accountRequest.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, message } from "antd";

const RegistrationRequestForm = () => {
  const router = useRouter();
  const [requestAccount, { isLoading }] = useAccountRequestMutation();
  const submitHandler = async (data: IAccReq) => {
    message.loading("Requesting.....");
    try {
      const res = await requestAccount(data).unwrap();
      if (!!res) {
        message.destroy();
        message.success("We'll email your new account details soon. Thank you!");
        router.push("/");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Account request failed! try again");
    }
  };

  return (
    <div className="ga-container">
      <div className="py-10">
        <div className="max-w-xl mx-auto">
          <Card>
            <h1 className="text-[2rem] mb-5 text-primary">Request An Account</h1>
            <Form submitHandler={submitHandler} resolver={zodResolver(accountRequestValidation)}>
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
                    style={{
                      width: "200px",
                    }}
                  />
                </div>
                <div>
                  <FormInput name="name" required label="Customer Name" size="large" />
                </div>
                <div>
                  <FormInput name="companyName" required label="Company Name" size="large" />
                </div>
                <div>
                  <FormInput name="companyRegNo" required label="Company Registered No." size="large" />
                </div>
                <div>
                  <FormInput name="taxNumber" required label="TAX No." size="large" />
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
                  <FormTextArea name="companyDetails" required label="Details About Company" rows={5} />
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
