"use client";
import { Layout } from "antd";
import React from "react";
import AdminBreadCrumb from "../sections/Layout/AdminBreadCrumb";
import AdminHeader from "../sections/Layout/AdminHeader";
import AdminSideBar from "../sections/Layout/AdminSidebar";

const { Content, Footer } = Layout;

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <AdminSideBar />
      <Layout>
        <AdminHeader />
        <Content style={{ margin: "0 16px" }}>
          <AdminBreadCrumb />
          <div className="p-5 my-5 min-h-screen shadow-xl rounded-lg">{children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>© 2020 - 2023 Golden Anchor | General terms and conditions | Disclaimer | Privacy</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
