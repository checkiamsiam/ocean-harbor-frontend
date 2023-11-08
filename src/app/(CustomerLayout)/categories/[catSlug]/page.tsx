import BreadCrumbs from "@/components/sections/CategoryProducts/BreadCrumbs";
import CategoryWiseProductFilter from "@/components/sections/CategoryProducts/CategoryWiseProductFilter";

const CategoryProductsPage = ({ params }: { params: { catSlug: string } }) => {
  return (
    <div>
      <BreadCrumbs category={params.catSlug} />
      <CategoryWiseProductFilter />
    </div>
  );
};

export default CategoryProductsPage;
