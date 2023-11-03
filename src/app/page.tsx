import CustomerLayout from "@/components/layout/CustomerLayout";
import HomBanner from "@/components/sections/Home/HomBanner";
import HomeAbout from "@/components/sections/Home/HomeAbout";
import HomeBrands from "@/components/sections/Home/HomeBrands";
import HomeCategories from "@/components/sections/Home/HomeCategories";

const HomePage = () => {
  return (
    <>
      <CustomerLayout>
        <HomBanner />
        <HomeAbout />
        <HomeCategories />
        <HomeBrands />
      </CustomerLayout>
    </>
  );
};

export default HomePage;
