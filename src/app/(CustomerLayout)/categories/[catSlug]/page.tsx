import BreadCrumbs from "@/components/sections/CategoryProducts/BreadCrumbs";
import ProductFilter from "@/components/sections/CategoryProducts/ProductFilter";

const CategoryProductsPage = ({ params }: { params: { catSlug: string } }) => {
  return (
    <div>
      <BreadCrumbs category={params.catSlug} />
      <ProductFilter />
    </div>
  );
};

export default CategoryProductsPage;
