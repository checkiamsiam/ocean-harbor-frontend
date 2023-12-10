"use client";

import { accessToken_key } from "@/constants/localstorageKeys";
import { UserRole } from "@/types/ApiResponse";
import { setToLocalStorage } from "@/utils/browserStorage/localstorage";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const BrowserActivityProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (session?.accessToken) {
      setToLocalStorage(accessToken_key, session?.accessToken);
    }
  }, [session?.accessToken, status]);

  useEffect(() => {
    if (session?.user?.role === UserRole.admin && pathName === "/") {
      router.push("/admin/profile");
    }
    console.log("object");
  }, [router, pathName, session?.user?.role]);

  return <>{children}</>;
};

export default BrowserActivityProvider;
