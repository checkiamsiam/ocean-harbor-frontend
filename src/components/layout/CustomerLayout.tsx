import React from "react";
import Header from "../sections/Header";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default CustomerLayout;
