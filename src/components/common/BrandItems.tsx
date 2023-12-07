import { Link } from "@/lib/router-events";
import Image from "next/image";

const BrandItems = ({ icon, link }: { icon: string; link: string }) => {
  return (
    <div>
      <div className="p-5 flex justify-center items-center">
        <Link href={link} className="hover:grayscale grayscale-0 transition duration-300 ease-in-out">
          <Image src={icon} alt="" width={150} height={150}  />
        </Link>
      </div>
    </div>
  );
};

export default BrandItems;
