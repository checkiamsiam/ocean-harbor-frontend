import CustomerLayout from "@/components/layout/CustomerLayout";
import HomBanner from "@/components/sections/Home/HomBanner";
import HomeAbout from "@/components/sections/Home/HomeAbout";
import HomeCategories from "@/components/sections/Home/HomeCategories";

const HomePage = () => {
  return (
    <>
      <CustomerLayout>
        <HomBanner />
        <HomeAbout />
        <HomeCategories />
      </CustomerLayout>
    </>
  );
};

export default HomePage;
