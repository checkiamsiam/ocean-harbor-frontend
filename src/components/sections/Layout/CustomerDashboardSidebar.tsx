"use client";
import { customerDashboardItems } from "@/constants/CustomerDashboard";
import { Layout, Menu, SiderProps } from "antd";
import { useState } from "react";
const { Sider } = Layout;

const CustomerDashboardSidebar = () => {
  const [broken, setBroken] = useState(false);

  const siderProps: SiderProps = broken
    ? {
        collapsed: true,
      }
    : {
        width: 250,
      };
  return (
    <Sider breakpoint="md" onBreakpoint={(broken) => setBroken(broken)} {...siderProps}>
      <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%" }} items={customerDashboardItems} />
    </Sider>
  );
};

export default CustomerDashboardSidebar;
