import BrandItems from "@/components/common/BrandItems";
import { Brand } from "@/types/ApiResponse";

const BrandResult = ({ brands }: { brands: Brand[] }) => {
  return (
    <div>
      <div className="py-10">
        {/* =========== Brands =========== */}
        <div className="flex flex-wrap  justify-center">
          {brands &&
            brands?.map((brand) => (
              <div key={brand.id} className="lg:w-1/5 sm:w-1/3  w-1/2">
                <BrandItems icon={brand.logo} link={`/brands/${brand.id}`} />{" "}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BrandResult;
