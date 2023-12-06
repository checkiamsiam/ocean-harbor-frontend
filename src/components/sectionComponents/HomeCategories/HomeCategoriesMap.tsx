"use client";
import CategoryLinkCard from "@/components/common/CategoryLinkCard";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";

const HomeCategoriesMap = () => {
  const { data, isLoading, isSuccess } = useGetCategoriesQuery({});
  if (isLoading && !isSuccess) return <div>Loading...</div>;
  return (
    <div>
      <div className="flex flex-wrap md:gap-10 gap-5 justify-center ">
        {data?.categories?.slice(0, 14)?.map((cat, i) => (
          <CategoryLinkCard key={cat.id} link={`/categories/${cat.id}`} img={cat.icon} title={cat.title} />
        ))}
      </div>
    </div>
  );
};

export default HomeCategoriesMap;
