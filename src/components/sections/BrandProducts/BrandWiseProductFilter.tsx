import BrandProductPagination from "@/components/sectionComponents/BrandWiseProduct/Pagination";
import SelectBrand from "@/components/sectionComponents/BrandWiseProduct/SelectBrand";
import SelectCategory from "@/components/sectionComponents/BrandWiseProduct/SelectCategory";
import SelectSubCategory from "@/components/sectionComponents/BrandWiseProduct/SelectSubCategory";
import { getBrands } from "@/redux/features/brand/brandApi";
import { IQuery } from "@/types";
import { Brand } from "@/types/ApiResponse";

const BrandWiseProductFilter = async ({ brand, searchParams }: { brand: Brand; searchParams: IQuery }) => {
  const data = await getBrands({});
  return (
    <div>
      <div className="ga-container">
        <div className="pb-5">
          <div className="flex flex-wrap gap-1 justify-between items-center">
            <div className="flex flex-wrap gap-1">
              <SelectBrand allBrands={data?.brands} currentBrand={brand} />
              {brand?.categories && <SelectCategory  categories={brand?.categories}  />}
              <SelectSubCategory brandId={brand?.id} searchParams={searchParams}/>
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
