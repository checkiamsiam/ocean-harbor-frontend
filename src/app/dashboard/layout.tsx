import CustomerDashboardLayout from "@/components/layout/CustomerDashboardLayout";
import PublicLayout from "@/components/layout/PublicLayout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PublicLayout>
      <CustomerDashboardLayout> {children} </CustomerDashboardLayout>
    </PublicLayout>
  );
};

export default Layout;
