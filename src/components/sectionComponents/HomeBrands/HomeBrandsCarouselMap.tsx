"use client";
import BrandItems from "@/components/common/BrandItems";
import { getBrands, useGetBrandsQuery } from "@/redux/features/brand/brandApi";
import { Carousel } from "antd";
import { settings } from "./HomeBrandsCarouselSettings";

const HomeBrandsCarouselMap =  () => {
  const { data, isLoading } = useGetBrandsQuery({});
  // const data = await getBrands({});
  return (
    <Carousel {...settings}>
      {data && data?.brands?.map((brand) => <BrandItems key={brand.id} icon={brand.logo} link={`/brands/${brand.id}`} />)}
    </Carousel>
  );
};

export default HomeBrandsCarouselMap;
