"use client";
import BrandItems from "@/components/common/BrandItems";
import { useGetBrandsQuery } from "@/redux/features/brand/brandApi";
import { Carousel } from "antd";
import { settings } from "./HomeBrandsCarouselSettings";

const HomeBrandsCarouselMap = () => {
  const { data, isLoading, isSuccess } = useGetBrandsQuery({});
  return (
    <Carousel {...settings}>
      {data?.brands?.map((brand) => (
        <BrandItems key={brand.id} icon={brand.logo} link={`/brands/${brand.id}`} />
      ))}
    </Carousel>
  );
};

export default HomeBrandsCarouselMap;
