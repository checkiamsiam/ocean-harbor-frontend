"use client";
import { signOut } from "@/service/auth/signOut";
import { RiLogoutBoxRFill } from "react-icons/ri";
const LogoutButton = () => {
  return (
    <div>
      <span onClick={async () => await signOut()} className="text-white flex cursor-pointer justify-center gap-2 items-center hover:text-primary">
        <RiLogoutBoxRFill className="text-icon" />
      </span>
    </div>
  );
};

export default LogoutButton;
