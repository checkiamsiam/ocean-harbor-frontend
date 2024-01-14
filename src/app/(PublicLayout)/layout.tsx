import PublicLayout from "@/components/layout/PublicLayout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <PublicLayout>{children}</PublicLayout>;
};

export default Layout;
