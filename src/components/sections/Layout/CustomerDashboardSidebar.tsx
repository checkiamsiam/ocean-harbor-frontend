"use client";
import { customerDashboardItems } from "@/constants/CustomerDashboard";
import { useAppSelector } from "@/redux/hooks";
import { Layout, Menu, SiderProps } from "antd";
import { useState } from "react";
const { Sider } = Layout;

const CustomerDashboardSidebar = () => {
  const { dashboardCollapsed } = useAppSelector((state) => state.customerDashboard);
  const [broken, setBroken] = useState(false);

  const siderProps: SiderProps = broken
    ? {
        collapsedWidth: "0",
        trigger: null,
        collapsed: dashboardCollapsed,
      }
    : {
        width: 250,
      };
  return (
    <Sider breakpoint="lg" onBreakpoint={(broken) => setBroken(broken)} {...siderProps} className="absolute z-40" >
      <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%" }} items={customerDashboardItems} />
    </Sider>
  );
};

export default CustomerDashboardSidebar;
