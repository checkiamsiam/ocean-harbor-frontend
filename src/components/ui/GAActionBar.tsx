"use client";
import { toggleAdminDashboardCollapsed } from "@/redux/features/adminDashboard/adminDashboard";
import { toggleDashboardCollapsed } from "@/redux/features/dashboard/dashboardSlice";
import { useAppDispatch } from "@/redux/hooks";
import { UserRole } from "@/types/ApiResponse";
import { useSession } from "next-auth/react";
import { BiSolidDashboard } from "react-icons/bi";

type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode | JSX.Element;
};

const GAActionBar = ({ title, children }: ActionBarProps) => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const handleDashboardOpen = () => {
    if (session?.user?.role === UserRole.customer) {
      dispatch(toggleDashboardCollapsed());
    }
    if (session?.user?.role === UserRole.admin) {
      dispatch(toggleAdminDashboardCollapsed());
    }
  };
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-heading text-primary capitalize">{title}</h1>

        <div className="lg:hidden block">
          <span onClick={handleDashboardOpen} className="flex underline justify-center gap-2 items-center cursor-pointer text-primary">
            <BiSolidDashboard className="text-icon" /> <span>Dashboard</span>
          </span>
        </div>
      </div>
      <div className="my-3 flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default GAActionBar;
