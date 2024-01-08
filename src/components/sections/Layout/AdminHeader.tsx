import BackButton from "@/components/common/BackButton";
import LogoutButton from "@/components/common/LogoutButton";
import NotificationButton from "@/components/common/NotificationButton";
import { Flex, Layout } from "antd";
const { Header } = Layout;

const AdminHeader = () => {
  return (
    <div className="sticky left-0 top-0 bottom-0 overflow-auto p-0 z-50">
      <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <BackButton text />
        <Flex justify="end" align="center" gap={10}>
          <LogoutButton text />
          <NotificationButton />
        </Flex>
      </Header>
    </div>
  );
};

export default AdminHeader;
