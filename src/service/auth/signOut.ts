import { accessToken_key } from "@/constants/localstorageKeys";
import { removeFromLocalStorage } from "@/utils/browserStorage/localstorage";
import { signOut } from "next-auth/react";

const gaSignOut = async (): Promise<void> => {
  await signOut({ redirect: true, callbackUrl: "/login" });
  removeFromLocalStorage(accessToken_key);
};

export { gaSignOut as signOut };
