import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { Brand } from "@/types/ApiResponse";

const BreadCrumbs = ({ brand }: { brand: Brand }) => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-5">
          <GABreadCrumb
            items={[
              { label: "Home", link: "/" },
              { label: "Brand", link: "/brands" },
              { label: brand.title , link: `/brands/${brand.id}` },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
