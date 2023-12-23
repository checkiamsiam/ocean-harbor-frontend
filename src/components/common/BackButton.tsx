"use client";
import { useRouter } from "@/lib/router-events";
import { MdKeyboardBackspace } from "react-icons/md";

const BackButton = ({ text }: { text?: boolean }) => {
  const router = useRouter();
  return (
    <div>
      <span onClick={() => router.back()} className="text-white flex cursor-pointer justify-center gap-2 items-center hover:text-primary">
        <MdKeyboardBackspace className="text-icon" /> {text && "Back"}
      </span>
    </div>
  );
};

export default BackButton;
