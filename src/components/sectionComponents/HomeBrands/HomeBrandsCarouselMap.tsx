"use client";
import BrandItems from "@/components/common/BrandItems";
import { useGetBrandsQuery } from "@/redux/features/brand/brandApi";
import { Carousel, Skeleton } from "antd";
import { settings } from "./HomeBrandsCarouselSettings";

const HomeBrandsCarouselMap = () => {
  const { data, isLoading } = useGetBrandsQuery({});
  return (
    <div>
      {isLoading ? (
        <div>
          <Skeleton active />
        </div>
      ) : (
        <Carousel {...settings}>
          {data && data?.brands?.map((brand) => <BrandItems key={brand.id} icon={brand.logo} link={`/brands/${brand.id}`} />)}
        </Carousel>
      )}
    </div>
  );
};

export default HomeBrandsCarouselMap;
