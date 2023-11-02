import { TbWorldWww } from "react-icons/tb";
import HomeAboutListItem from "./HomeAboutListItem";

const WeAreInNumber = () => {
  return (
    <div>
      <h1 className="text-heading italic text-primary ">We are in Number</h1>
      <ul className="list-none py-5 flex flex-col gap-5">
        <HomeAboutListItem icon={<TbWorldWww />} text="Over 100 quality brands" />
        <HomeAboutListItem icon={<TbWorldWww />} text="More than 2000 products" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Over 30 years of experience" />
        <HomeAboutListItem icon={<TbWorldWww />} text="More than 2500 happy customers" />
      </ul>
    </div>
  );
};

export default WeAreInNumber;
