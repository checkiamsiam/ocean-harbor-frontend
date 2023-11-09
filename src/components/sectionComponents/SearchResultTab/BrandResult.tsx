import BrandItems from "@/components/common/BrandItems";

const BrandResult = () => {
  return (
    <div>
      <div className="py-10">
        {/* =========== Brands =========== */}
        <div className="flex flex-wrap  justify-center">
          {Array(12)
            .fill(Math.random())
            .map((_, i) => (
              <div key={i} className="lg:w-1/5 sm:w-1/3  w-1/2">
                <BrandItems key={i} icon="/img/pran-logo.png" link="/brands/pran" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BrandResult;
