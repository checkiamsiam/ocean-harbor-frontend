import BrandItems from "@/components/common/BrandItems";

const Brands = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          {/* =========== Brands =========== */}
          <div className="flex flex-wrap  justify-center">
            {Array(12)
              .fill(Math.random())
              .map((_, i) => (
                <div key={i} className="lg:w-1/5 sm:w-1/3  w-1/2">
                  
                  <BrandItems key={i} icon="/img/pran-logo.png" link="/" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
