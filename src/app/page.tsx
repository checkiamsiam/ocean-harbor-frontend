import Banner from "@/components/common/Banner";
import CustomerLayout from "@/components/layout/PublicLayout";
import HomBanner from "@/components/sections/Home/HomBanner";
import HomeAbout from "@/components/sections/Home/HomeAbout";
import HomeBrands from "@/components/sections/Home/HomeBrands";
import HomeCategories from "@/components/sections/Home/HomeCategories";
import styles from "@/styles/home.module.css";

const HomePage = () => {
  return (
    <>
      <CustomerLayout>
        <HomBanner />
        <HomeAbout />
        <HomeCategories />
        <HomeBrands />
        <Banner
          background={styles.callToActBG}
          title="Wanna Join Us?"
          subTitle="Let's work together with the Ocean Harbor"
          action={{
            title: "Request Price Quotation",
            link: "/",
          }}
        />
      </CustomerLayout>
    </>
  );
};

export default HomePage;
