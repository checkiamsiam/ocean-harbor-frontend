"use client";
import { useRouter } from "@/lib/router-events";
import { signOut } from "@/service/auth/signOut";
import { message } from "antd";
import { RiLogoutBoxRFill } from "react-icons/ri";
const LogoutButton = ({ text }: { text?: boolean }) => {
  const router = useRouter();
  const handleSignOut = async () => {
    message.loading("Singing Out.....");
    try {
      await signOut();
      message.destroy();
      router.push("/login");
    } catch (err: any) {
      message.destroy();
      await signOut();
    }
  };
  return (
    <div>
      <span onClick={handleSignOut} className="text-white flex cursor-pointer justify-center gap-2 items-center hover:text-primary">
        {text && "Logout"} <RiLogoutBoxRFill className="text-icon" />
      </span>
    </div>
  );
};

export default LogoutButton;
