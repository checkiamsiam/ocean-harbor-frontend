import React from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "125px" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
