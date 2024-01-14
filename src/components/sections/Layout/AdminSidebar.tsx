"use client";
import GALogo from "@/components/common/OHLogo";
import { adminMenuItems } from "@/constants/AdminDashboardItems";
import { useAppSelector } from "@/redux/hooks";
import { Layout, Menu, SiderProps } from "antd";
import { useState } from "react";
const { Sider } = Layout;

const AdminSideBar = () => {
  const { dashboardCollapsed } = useAppSelector((state) => state.adminDashboard);
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);

  const siderProps: SiderProps = broken
    ? {
        collapsedWidth: "0",
        trigger: null,
        collapsed: dashboardCollapsed,
      }
    : {
        width: 250,
        collapsible: true,
        collapsed: collapsed,
        onCollapse: (value) => setCollapsed(value),
        style: {
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        },
      };

  return (
    <Sider breakpoint="lg" onBreakpoint={(broken) => setBroken(broken)} {...siderProps}>
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: ".5rem",
          padding: "10px 0px",
        }}
      >
        {!collapsed && <GALogo />}
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={adminMenuItems} />
    </Sider>
  );
};

export default AdminSideBar;
