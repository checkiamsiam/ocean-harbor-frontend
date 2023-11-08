import BrandProductPagination from "@/components/sectionComponents/BrandWiseProduct/Pagination";
import SelectBrand from "@/components/sectionComponents/BrandWiseProduct/SelectBrand";
import SelectCategory from "@/components/sectionComponents/BrandWiseProduct/SelectCategory";
import SelectSubCategory from "@/components/sectionComponents/BrandWiseProduct/SelectSubCategory";

const BrandWiseProductFilter = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="pb-5">
          <div className="flex flex-wrap gap-1 justify-between items-center">
            <div className="flex flex-wrap gap-1">
              <SelectBrand />
              <SelectCategory />
              <SelectSubCategory />
            </div>
            <div>
              <BrandProductPagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandWiseProductFilter;
