import GABreadCrumb from "@/components/ui/GABreadcrumb";

const AdminBreadCrumb = () => {
  return (
    <div>
      <div className="mt-5">
        <GABreadCrumb
          items={[
            { label: "Home", link: "/" },
            { label: "Brand", link: "/brands" },
          ]}
        />
      </div>
    </div>
  );
};

export default AdminBreadCrumb;
