import CustomerLayout from "@/components/layout/CustomerLayout";
import HomBanner from "@/components/sections/Home/HomBanner";
import HomeAbout from "@/components/sections/Home/HomeAbout";

const HomePage = () => {
  return (
    <>
      <CustomerLayout>
        <HomBanner />
        <HomeAbout/>
      </CustomerLayout>
    </>
  );
};

export default HomePage;
