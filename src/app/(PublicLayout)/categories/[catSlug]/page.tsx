import BreadCrumbs from "@/components/sections/CategoryProducts/BreadCrumbs";
import CategoryWiseProductFilter from "@/components/sections/CategoryProducts/CategoryWiseProductFilter";
import CategoryWiseProducts from "@/components/sections/CategoryProducts/CategoryWiseProducts";
import { IQuery } from "@/types";

const CategoryProductsPage = ({ params, searchParams }: { params: { catSlug: string }; searchParams: IQuery }) => {
  return (
    <div>
      <BreadCrumbs categoryId={params.catSlug} />
      <CategoryWiseProductFilter categoryId={params.catSlug} />
      <CategoryWiseProducts categoryId={params.catSlug} searchQuery={searchParams} />
    </div>
  );
};

export default CategoryProductsPage;
