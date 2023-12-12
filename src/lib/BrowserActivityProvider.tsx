"use client";

import { accessToken_key } from "@/constants/localstorageKeys";
import { removeFromLocalStorage, setToLocalStorage } from "@/utils/browserStorage/localstorage";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

const BrowserActivityProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session?.accessToken) {
      setToLocalStorage(accessToken_key, session?.accessToken);
    } else {
      removeFromLocalStorage(accessToken_key);
    }
  }, [session?.accessToken, status]);

  return <>{children}</>;
};

export default BrowserActivityProvider;
