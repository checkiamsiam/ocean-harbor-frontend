"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import GAButton from "@/components/ui/GAButton";
import { Link } from "@/lib/router-events";
import { Card } from "antd";

const LoginForm = () => {
  const submitHandler = (data: any) => {
    console.log("submited");
  };
  return (
    <div className="ga-container">
      <div className="py-10">
        <div className="max-w-lg mx-auto">
          <Card>
            <h1 className="text-[2rem] mb-5 text-primary">Login</h1>

            <Form submitHandler={submitHandler}>
              <div className="flex flex-col gap-4">
                <div>
                  <FormInput name="email" required label="Email" size="large" />
                </div>
                <div>
                  <FormInput name="password" required type="password" label="Password" size="large" />
                </div>

                <p className="text-center">
                  <Link href="/registration" className="text-primary underline hover:text-primary">
                    No account? Request a registration
                  </Link>
                </p>

                <div className="flex justify-end">
                  <GAButton htmlType="submit" size="large" arrow>
                    Login
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

export default LoginForm;
