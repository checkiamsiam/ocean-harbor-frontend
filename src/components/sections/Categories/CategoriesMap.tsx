"use client";
import CategoryLinkCard from "@/components/common/CategoryLinkCard";
import SectionHeader from "@/components/common/SectionHeader";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";

const CategoriesMap = () => {
  const { data } = useGetCategoriesQuery({});
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          <SectionHeader title="Categories" subtitle="The best of the best categories of our products" />
          <div className="p-5 mt-5">
            <div className="flex flex-wrap md:gap-10 gap-5 justify-center ">
              {data?.categories.map((cat, i) => (
                <CategoryLinkCard key={cat.id} link={`/categories/${cat.id}`} img={cat.icon} title={cat.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesMap;
