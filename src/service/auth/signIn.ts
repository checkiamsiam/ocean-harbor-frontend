import { login_credential } from "@/constants/credentialId";
import { signIn as nextAuthSignIn } from "next-auth/react";

export const signIn = async ({ email, password }: { email: string; password: string }): Promise<void> => {
  await nextAuthSignIn(login_credential, {
    email: email,
    password: password,
    redirect: true,
    callbackUrl: "/",
  });
};

