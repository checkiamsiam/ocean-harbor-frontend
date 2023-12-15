"use client";
import { toggleDashboardCollapsed } from "@/redux/features/CustomerDashboard/CustomerDashboardSlice";
import { useAppDispatch } from "@/redux/hooks";
import { BiSolidDashboard } from "react-icons/bi";

type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode | JSX.Element;
  customer?: boolean;
};

const  GAActionBar = ({ title, children, customer }: ActionBarProps) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-heading text-primary uppercase">{title}</h1>

        <div className="lg:hidden block">
          {customer && (
            <span onClick={() => dispatch(toggleDashboardCollapsed())} className="flex underline justify-center gap-2 items-center cursor-pointer text-primary">
              <BiSolidDashboard className="text-icon" /> <span>Dashboard</span>
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center my-5">{children}</div>
    </div>
  );
};

export default GAActionBar;
