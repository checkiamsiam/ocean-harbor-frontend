import GABreadCrumb from "@/components/ui/GABreadcrumb";

const BreadCrumbs = ({ category }: { category: string }) => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-5">
          <GABreadCrumb
            items={[
              { label: "Home", link: "/" },
              { label: "Categories", link: "/categories" },
              { label: category, link: `/categories/${category}` },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
