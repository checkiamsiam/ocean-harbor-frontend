import BrandWiseProducts from "@/components/sections/BrandProducts/BrandWiseProduct";
import BrandWiseProductFilter from "@/components/sections/BrandProducts/BrandWiseProductFilter";
import BreadCrumbs from "@/components/sections/BrandProducts/BreadCrumbs";
import { getSingleBrand } from "@/redux/features/brand/brandApi";
import { IQuery } from "@/types";

const BrandProductsPage = async ({ params, searchParams }: { params: { brandSlug: string }; searchParams: IQuery }) => {
  const data = await getSingleBrand({
    id: params.brandSlug,
    params: {
      populate: "categories",
    },
  });
  return (
    <div>
      <BreadCrumbs brand={data?.brand} />
      <BrandWiseProductFilter brand={data?.brand} searchParams={searchParams} />
      <BrandWiseProducts brandId={params.brandSlug} searchQuery={searchParams} />
    </div>
  );
};

export default BrandProductsPage;
