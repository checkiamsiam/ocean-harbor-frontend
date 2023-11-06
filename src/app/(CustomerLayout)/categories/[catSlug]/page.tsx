import BreadCrumbs from "@/components/sections/CategoryProducts/BreadCrumbs";

const CategoryProductsPage = ({ params }: { params: { catSlug: string } }) => {
  return (
    <div>
      <BreadCrumbs category={params.catSlug}/>
    </div>
  );
};

export default CategoryProductsPage;
