import CustomerLayout from "@/components/layout/CustomerLayout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <CustomerLayout>{children}</CustomerLayout>
      </body>
    </html>
  );
};

export default Layout;
