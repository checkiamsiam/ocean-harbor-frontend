import CategoryLinkCard from "@/components/common/CategoryLinkCard";

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

const HomeCategoriesMap = () => {
  return (
    <div>
      <div className="flex flex-wrap md:gap-10 gap-5 justify-center ">
        {categoris.slice(0, 14).map((cat, i) => (
          <CategoryLinkCard key={i} link="/" img="/img/DRINKS.svg" title={cat} />
        ))}
      </div>
    </div>
  );
};

export default HomeCategoriesMap;
