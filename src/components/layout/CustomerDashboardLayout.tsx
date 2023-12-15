"use client";
import { Layout } from "antd";
import React from "react";
import CustomerDashboardSidebar from "../sections/Layout/CustomerDashboardSidebar";

const { Content } = Layout;

const CustomerDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="ga-container">
        <div className="">
          <Layout hasSider style={{ padding: "24px 0", backgroundColor: "white", minHeight: "100vh" }}>
            <CustomerDashboardSidebar />
            <Content className="md:ml-5">{children}</Content>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboardLayout;
