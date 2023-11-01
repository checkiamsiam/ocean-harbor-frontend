import React from "react";
import Header from "../sections/Header";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "125px" }}>{children}</div>
    </div>
  );
};

export default CustomerLayout;
