import { TbWorldWww } from "react-icons/tb";
import HomeAboutListItem from "./HomeAboutListItem";

const WeAreInNumber = () => {
  return (
    <div>
      <h1 className="text-heading  text-primary ">We are in Number</h1>
      <ul className="list-none py-5 flex flex-col gap-5">
        <HomeAboutListItem icon={<TbWorldWww />} text="More than 30 diverse seafood varieties" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Over 1000 tons of seafood exported annually" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Passionate about European flavors" />
        <HomeAboutListItem icon={<TbWorldWww />} text="More than 15 EU countries served" />
      </ul>
    </div>
  );
};

export default WeAreInNumber;
