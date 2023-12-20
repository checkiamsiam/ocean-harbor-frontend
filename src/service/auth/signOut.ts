import { accessToken_key } from "@/constants/localstorageKeys";
import { removeFromCookie } from "@/utils/browserStorage/cookiestorage";
import { signOut } from "next-auth/react";

const gaSignOut = async (): Promise<void> => {
  const host = window ? window.location.hostname : "";
  await signOut({ redirect: true, callbackUrl: host + "/login" });
  removeFromCookie(accessToken_key);
};

export { gaSignOut as signOut };
