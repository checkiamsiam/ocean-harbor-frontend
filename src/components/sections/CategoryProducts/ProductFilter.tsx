import CategoryProductPagination from "@/components/sectionComponents/ProductFilters/Pagination";
import SelectBrand from "@/components/sectionComponents/ProductFilters/SelectBrand";
import SelectCategory from "@/components/sectionComponents/ProductFilters/SelectCategory";
import SelectSubCategory from "@/components/sectionComponents/ProductFilters/SelectSubCategory";

const ProductFilters = () => {
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

export default ProductFilters;
