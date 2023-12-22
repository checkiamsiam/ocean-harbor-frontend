"use client";
import { store } from "@/redux/store";
import { Session as NextAuthSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";
import BrowserActivityProvider from "./BrowserActivityProvider";

const Providers = ({ children, session }: { children: ReactNode; session: NextAuthSession }) => {
  return (
    <SessionProvider session={session}>
      <BrowserActivityProvider>
        <Provider store={store}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </BrowserActivityProvider>
    </SessionProvider>
  );
};

export default Providers;
