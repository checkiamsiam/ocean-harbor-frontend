"use client";
import GALogo from "@/components/common/GALogo";
import { Layout, Menu, SiderProps } from "antd";
import { useState } from "react";
import { adminMenuItems } from "@/constants/AdminDashboardItems";
const { Sider } = Layout;

const AdminSideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [brCollapsed, setBrCollapsed] = useState(true);
  const [broken, setBroken] = useState(false);

  const siderProps: SiderProps = broken
    ? {
        collapsedWidth: "0",
        collapsed: brCollapsed,
        onCollapse: (value) => setBrCollapsed(value),
        zeroWidthTriggerStyle: {
          marginTop: "3rem",
        },
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
    <Sider breakpoint="md" onBreakpoint={(broken) => setBroken(broken)} {...siderProps}>
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
