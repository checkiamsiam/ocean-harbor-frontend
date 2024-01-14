import { TbWorldWww } from "react-icons/tb";
import HomeAboutListItem from "./HomeAboutListItem";

const WeAreInNumber = () => {
  return (
    <div>
      <h1 className="text-heading  text-primary ">We are in Number</h1>
      <ul className="list-none py-5 flex flex-col gap-5">
        <HomeAboutListItem icon={<TbWorldWww />} text="More than 20 leading brands" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Over 500 products" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Passionate about Bangladeshi flavors" />
        <HomeAboutListItem icon={<TbWorldWww />} text="More than 10 EU countries served" />
      </ul>
    </div>
  );
};

export default WeAreInNumber;
