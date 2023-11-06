import CategoryLinkCard from "@/components/common/CategoryLinkCard";
import SectionHeader from "@/components/common/SectionHeader";

const categoris = [
  "Drinks",
  "Food",
  "Household",
  "Personal Care",
  "Tobacco",
  "Pet Care",
  "Baby Care",
  "Health & Beauty",
  "Stationary",
  "Candy & Snacks",
  "Pharmacy",
  "General Merchandise",
  "Vitamins & Supplements",
  "More",
];

const CategoriesMap = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          <SectionHeader title="Categories" subtitle="The best of the best categories of our products" />
          <div className="p-5 mt-5">
            <div className="flex flex-wrap md:gap-10 gap-5 justify-center ">
              {categoris.slice(0, 14).map((cat, i) => (
                <CategoryLinkCard key={i} link="/" img="/img/DRINKS.svg" title={cat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesMap;
