import HomeBrandsCarouselMap from "@/components/sectionComponents/HomeBrands/HomeBrandsCarouselMap";
import GAButton from "@/components/ui/GAButton";

const HomeBrands = () => {
  return (
    <div className="ga-container">
      <div className="py-10">
        <div className="flex justify-center">
          <GAButton arrow>Our Brands</GAButton>
        </div>
        <div>
          <div className="mt-5">
            <HomeBrandsCarouselMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrands;
