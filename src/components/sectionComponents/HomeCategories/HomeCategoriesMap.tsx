"use client";
import CategoryLinkCard from "@/components/common/CategoryLinkCard";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import { Skeleton } from "antd";

const HomeCategoriesMap = () => {
  const { data, isLoading } = useGetCategoriesQuery({
    params: {
      limit: 14,
      page: 1,
    },
  });
  return (
    <div>
      {isLoading ? (
        <div>
          <Skeleton active />
        </div>
      ) : (
        <div className="flex flex-wrap md:gap-10 gap-5 justify-center ">
          {data?.categories &&
            data?.categories
              ?.slice(0, 14)
              ?.map((cat, i) => <CategoryLinkCard key={cat.id} link={`/categories/${cat.id}`} img={cat.icon} title={cat.title} />)}
        </div>
      )}
    </div>
  );
};

export default HomeCategoriesMap;
