"use client";
import { signOut } from "next-auth/react";
import { RiLogoutBoxRFill } from "react-icons/ri";
const LogoutButton = () => {
  return (
    <div>
      <span onClick={() => signOut()} className="text-white flex cursor-pointer justify-center gap-2 items-center hover:text-primary">
        <RiLogoutBoxRFill className="text-icon" />
      </span>
    </div>
  );
};

export default LogoutButton;
