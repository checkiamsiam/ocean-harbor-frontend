import { Link } from "@/lib/router-events";
import Image from "next/image";

const CategoryLinkCard = ({ img, title, link }: { img: string; title: string; link: string }) => {
  return (
    <div className="sm:w-[100px] w-[80px]">
      <Link href={link} className="no-underline  hover:text-primary  text-primary flex flex-col justify-center">
        <Image
          src={img}
          alt="cat"
          width={100}
          height={100}
          className="border-2 m-auto border-solid border-primary rounded-full sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]"
        />
        <p className="text-body mt-1  text-center">{title}</p>
      </Link>
    </div>
  );
};

export default CategoryLinkCard;
