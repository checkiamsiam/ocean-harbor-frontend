"use client";
import { AppStore, makeStore } from "@/redux/store";
import { Session as NextAuthSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import BrowserActivityProvider from "./BrowserActivityProvider";

const Providers = ({ children, session }: { children: ReactNode; session: NextAuthSession }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  return (
    <SessionProvider session={session}>
      <BrowserActivityProvider>
        <Provider store={storeRef.current}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </BrowserActivityProvider>
    </SessionProvider>
  );
};

export default Providers;
