"use client";
import { Layout } from "antd";
import React, { useState } from "react";
import AdminHeader from "../sections/Layout/AdminHeader";
import AdminSideBar from "../sections/Layout/AdminSidebar";
import OrderItemsDrawer from "../common/OrderItemsDrawer";

const { Content, Footer } = Layout;

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider >
      <AdminSideBar  />
      <Layout>
        <AdminHeader />
        <Content style={{ margin: "0 16px" }}>
          <div className="p-5 mb-5 min-h-screen ">{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>© 2020 - 2023 Ocean Harbor | General terms and conditions | Disclaimer | Privacy</Footer>
      </Layout>
      <OrderItemsDrawer />
    </Layout>
  );
};

export default AdminLayout;
