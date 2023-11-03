import CustomerLayout from "@/components/layout/CustomerLayout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <CustomerLayout>{children}</CustomerLayout>;
};

export default Layout;
