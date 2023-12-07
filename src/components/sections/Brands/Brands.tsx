import BrandItems from "@/components/common/BrandItems";
import { getBrands } from "@/redux/features/brand/brandApi";

const Brands = async () => {
  const data = await getBrands({});
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          {/* =========== Brands =========== */}
          <div className="flex flex-wrap  justify-center">
            {data &&
              data?.brands?.map((brand) => (
                <div key={brand.id} className="lg:w-1/5 sm:w-1/3  w-1/2">
                  <BrandItems icon={brand.logo} link={`/brands/${brand.id}`} />{" "}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
