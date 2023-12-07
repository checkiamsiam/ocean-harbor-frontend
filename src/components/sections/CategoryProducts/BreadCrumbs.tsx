import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { getSingleCategory } from "@/redux/features/category/categoryApi";

const BreadCrumbs = async ({ categoryId }: { categoryId: string }) => {
  const data = await getSingleCategory({
    id: categoryId,
  });
  return (
    <div>
      <div className="ga-container">
        <div className="py-5">
          {data?.category && (
            <GABreadCrumb
              items={[
                { label: "Home", link: "/" },
                { label: "Categories", link: "/categories" },
                { label: data?.category.title, link: `/categories/${data?.category.id}` },
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
