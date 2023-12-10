import Banner from "@/components/common/Banner";
import CustomerLayout from "@/components/layout/CustomerLayout";
import HomBanner from "@/components/sections/Home/HomBanner";
import HomeAbout from "@/components/sections/Home/HomeAbout";
import HomeBrands from "@/components/sections/Home/HomeBrands";
import HomeCategories from "@/components/sections/Home/HomeCategories";
import { getServerSession } from "@/service/auth/getServerSession";
import styles from "@/styles/home.module.css";
import { UserRole } from "@/types/ApiResponse";
import { redirect } from "next/navigation";

const HomePage = async () => {

  const session = await getServerSession();

  if (session?.accessToken && session?.user?.role === UserRole.admin) {
    return redirect("/admin/profile");
  }



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
          subTitle="Let's work together with the Golden Anchor"
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
