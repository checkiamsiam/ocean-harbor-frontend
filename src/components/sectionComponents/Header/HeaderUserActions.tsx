"use client";
import LogoutButton from "@/components/common/LogoutButton";
import { Link } from "@/lib/router-events";
import { Flex } from "antd";
import { useSession } from "next-auth/react";
import { BiSolidCartAlt, BiSolidUser } from "react-icons/bi";

const HeaderUserActions = () => {
  const { data: session, status } = useSession();

  return (
    <Flex justify="end" align="center" gap={10}>
      {session && status === "authenticated" ? (
        <Link href="/dashboard/profile" className="text-white flex cursor-pointer justify-center gap-2 items-center hover:text-primary">
          <span>{session?.user?.username}</span> <BiSolidUser className="text-icon" />
        </Link>
      ) : (
        <Link href="/login" className="text-white flex justify-center gap-2 items-center hover:text-primary">
          <span>Sign In</span> <BiSolidUser className="text-icon" />
        </Link>
      )}
      <Link href="/cart" className="text-white flex justify-center gap-2 items-center hover:text-primary">
        <BiSolidCartAlt className="text-icon" />
      </Link>
      {session && status === "authenticated" && <LogoutButton />}
    </Flex>
  );
};

export default HeaderUserActions;
