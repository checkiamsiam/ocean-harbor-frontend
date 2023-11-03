import BrandItems from "@/components/common/BrandItems";
import { Carousel } from "antd";
import { settings } from "./HomeBrandsCarouselSettings";

const HomeBrandsCarouselMap = () => {
  return (
    <Carousel {...settings}>
      {Array(10)
        .fill(Math.random())
        .map((_, i) => (
          <BrandItems key={i} icon="/img/pran-logo.png" link="/" />
        ))}
    </Carousel>
  );
};

export default HomeBrandsCarouselMap;
