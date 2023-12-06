"use client";
import CategoryProductPagination from "@/components/sectionComponents/CategoryWiseProductFilter/Pagination";
import SelectBrand from "@/components/sectionComponents/CategoryWiseProductFilter/SelectBrand";
import SelectCategory from "@/components/sectionComponents/CategoryWiseProductFilter/SelectCategory";
import SelectSubCategory from "@/components/sectionComponents/CategoryWiseProductFilter/SelectSubCategory";
import { useGetSingleCategoryQuery } from "@/redux/features/category/categoryApi";

const CategoryWiseProductFilter = ({ categoryId }: { categoryId: string }) => {
  const { data, isLoading } = useGetSingleCategoryQuery(
    {
      id: categoryId,
      params: {
        populate: "subCategories,brands",
      },
    },
    { refetchOnMountOrArgChange: true }
  );
  return (
    <div>
      <div className="ga-container">
        <div className="pb-5">
          <div className="flex flex-wrap gap-1 justify-between items-center">
            <div className="flex flex-wrap gap-1">
              <SelectCategory />
              {data?.category?.subCategories && <SelectSubCategory subCategories={data?.category.subCategories} isLoading={isLoading} />}
              {data?.category?.brands && <SelectBrand brands={data?.category?.brands} isLoading={isLoading} />}
            </div>
            <div>
              <CategoryProductPagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProductFilter;
