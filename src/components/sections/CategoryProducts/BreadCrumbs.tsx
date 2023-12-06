"use client";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useGetSingleCategoryQuery } from "@/redux/features/category/categoryApi";

const BreadCrumbs = ({ categoryId }: { categoryId: string }) => {
  const { data } = useGetSingleCategoryQuery(
    {
      id: categoryId,
      params: {
        populate: "subCategories,brands",
      },
    },
    { refetchOnMountOrArgChange: true }
  );
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
