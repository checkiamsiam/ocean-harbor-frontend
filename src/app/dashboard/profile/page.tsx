import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";

const Profile = async () => {
  return (
    <div>
      <GAActionBar title="Account Profile">
        <GABreadCrumb items={[{ label: "Account" }, { label: "Profile"} ]} />
      </GAActionBar>
    </div>
  );
};

export default Profile;
