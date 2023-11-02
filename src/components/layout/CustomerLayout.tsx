import React from "react";
import Footer from "../sections/Layout/Footer";
import Header from "../sections/Layout/Header";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "122px" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
