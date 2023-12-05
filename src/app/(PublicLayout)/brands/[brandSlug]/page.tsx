import BrandWiseProducts from "@/components/sections/BrandProducts/BrandWiseProduct";
import BrandWiseProductFilter from "@/components/sections/BrandProducts/BrandWiseProductFilter";
import BreadCrumbs from "@/components/sections/BrandProducts/BreadCrumbs";

const BrandProductsPage = ({ params }: { params: { brandSlug: string } }) => {
  return (
    <div>
      <BreadCrumbs brand={params.brandSlug} />
      <BrandWiseProductFilter />
      <BrandWiseProducts />
    </div>
  );
};

export default BrandProductsPage;
