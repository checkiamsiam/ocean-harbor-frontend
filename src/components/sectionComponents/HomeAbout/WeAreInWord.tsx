import { TbWorldWww } from "react-icons/tb";
import HomeAboutListItem from "./HomeAboutListItem";

const WeAreInWord = () => {
  return (
    <div>
      <h1 className="text-heading  text-primary ">We are in word</h1>
      <ul className="list-none py-5 flex flex-col gap-5">
        <HomeAboutListItem icon={<TbWorldWww />} text="Strong in African, Asian, Middle Eastern and Latin American products" />
        <HomeAboutListItem icon={<TbWorldWww />} text="highly qualitative authentic products" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Personal contact with skilled staff" />
        <HomeAboutListItem icon={<TbWorldWww />} text="Certified quality; AEO, IFS, ISO 22000, SKAL, Fairtrade, BRC certified supply chain, BSCI" />
      </ul>
    </div>
  );
};

export default WeAreInWord;
