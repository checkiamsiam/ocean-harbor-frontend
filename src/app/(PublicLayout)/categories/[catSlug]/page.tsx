import BreadCrumbs from "@/components/sections/CategoryProducts/BreadCrumbs";
import CategoryWiseProductFilter from "@/components/sections/CategoryProducts/CategoryWiseProductFilter";
import CategoryWiseProducts from "@/components/sections/CategoryProducts/CategoryWiseProducts";

const CategoryProductsPage = ({ params }: { params: { catSlug: string } }) => {
  
  return (
    <div>
      <BreadCrumbs categoryId={params.catSlug} />
      <CategoryWiseProductFilter categoryId={params.catSlug}/>
      <CategoryWiseProducts />
    </div>
  );
};

export default CategoryProductsPage;
