import LogoutButton from "@/components/common/LogoutButton";
import { Layout } from "antd";
const { Header } = Layout;

const AdminHeader = () => {
  return (
    <div className="sticky left-0 top-0 bottom-0 overflow-auto p-0 z-50">
      <Header style={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
        <LogoutButton text/>
      </Header>
    </div>
  );
};

export default AdminHeader;
