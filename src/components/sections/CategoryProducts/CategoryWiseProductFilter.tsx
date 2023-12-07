import CategoryProductPagination from "@/components/sectionComponents/CategoryWiseProductFilter/Pagination";
import SelectBrand from "@/components/sectionComponents/CategoryWiseProductFilter/SelectBrand";
import SelectCategory from "@/components/sectionComponents/CategoryWiseProductFilter/SelectCategory";
import SelectSubCategory from "@/components/sectionComponents/CategoryWiseProductFilter/SelectSubCategory";
import { getCategory, getSingleCategory } from "@/redux/features/category/categoryApi";

const CategoryWiseProductFilter = async ({ categoryId }: { categoryId: string }) => {
  const data = await getSingleCategory({
    id: categoryId,
    params: {
      populate: "subCategories,brands",
    },
  });
  const allCat = await getCategory({});
  return (
    <div>
      <div className="ga-container">
        <div className="pb-5">
          <div className="flex flex-wrap gap-1 justify-between items-center">
            <div className="flex flex-wrap gap-1">
              {allCat && <SelectCategory categories={allCat.categories} categoryId={categoryId} />}
              {data?.category?.subCategories && <SelectSubCategory subCategories={data?.category.subCategories} />}
              {data?.category?.brands && <SelectBrand brands={data?.category?.brands} />}
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
