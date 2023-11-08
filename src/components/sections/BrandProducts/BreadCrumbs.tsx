import GABreadCrumb from "@/components/ui/GABreadcrumb";

const BreadCrumbs = ({ brand }: { brand: string }) => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-5">
          <GABreadCrumb
            items={[
              { label: "Home", link: "/" },
              { label: "Brand", link: "/brands" },
              { label: brand , link: `/categories/${brand}` },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
