import BrandWiseProductFilter from "@/components/sections/BrandProducts/BrandWiseProductFilter";
import BreadCrumbs from "@/components/sections/BrandProducts/BreadCrumbs";

const BrandProductsPage = ({ params }: { params: { brandSlug: string } }) => {
  return (
    <div>
      <BreadCrumbs brand={params.brandSlug} />
      <BrandWiseProductFilter />
    </div>
  );
};

export default BrandProductsPage;
