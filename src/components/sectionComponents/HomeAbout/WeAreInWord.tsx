import { TbWorldWww } from "react-icons/tb";
import HomeAboutListItem from "./HomeAboutListItem";

const WeAreInWord = () => {
  return (
    <div>
      <h1 className="text-heading  text-primary ">We are in word</h1>
      <ul className="list-none py-5 flex flex-col gap-5">
        <HomeAboutListItem icon={<TbWorldWww />} text="Specialized in premium seafood products" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Meticulously sourced and sustainably harvested" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Experienced and reliable staff" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Certified quality; EU, MSC, ASC, BRC certified supply chain" />
      </ul>
    </div>
  );
};

export default WeAreInWord;
