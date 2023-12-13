"use client";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import GAButton from "@/components/ui/GAButton";
import { Link, useRouter } from "@/lib/router-events";
import { signIn } from "@/service/auth/signIn";
import { ILoginCredentials } from "@/types";
import { Card } from "antd";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);
  const submitHandler = async (data: ILoginCredentials) => {
    const res = await signIn({
      email: data.email,
      password: data.password,
    })
    if (res?.ok && !res?.error) {
      router.push("/");
      setError(false);
    } else {
      setError(true);
    }
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

                {error && (
                  <p className="text-center">
                    <span className="text-red-500 underline ">Login failed !. Try with different credentials.</span>
                  </p>
                )}

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
