import CategoryProductPagination from "@/components/sectionComponents/CategoryWiseProductFilter/Pagination";
import SelectBrand from "@/components/sectionComponents/CategoryWiseProductFilter/SelectBrand";
import SelectCategory from "@/components/sectionComponents/CategoryWiseProductFilter/SelectCategory";
import SelectSubCategory from "@/components/sectionComponents/CategoryWiseProductFilter/SelectSubCategory";

const CategoryWiseProductFilter = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="pb-5">
          <div className="flex flex-wrap gap-1 justify-between items-center">
            <div className="flex flex-wrap gap-1">
              <SelectCategory />
              <SelectSubCategory />
              <SelectBrand />
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
