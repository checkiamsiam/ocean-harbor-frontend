import { TbWorldWww } from "react-icons/tb";
import HomeAboutListItem from "./HomeAboutListItem";

const WeAreInWord = () => {
  return (
    <div>
      <h1 className="text-heading  text-primary ">We are in word</h1>
      <ul className="list-none py-5 flex flex-col gap-5">
        <HomeAboutListItem icon={<TbWorldWww />} text="Specialized in South Asian products" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Authentic and high-quality products" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Friendly and professional staff" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Certified quality; BSTI, EU, FDI, ISO certified supply chain" />
      </ul>
    </div>
  );
};

export default WeAreInWord;
