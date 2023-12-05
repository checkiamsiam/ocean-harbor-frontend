import Banner from "@/components/common/Banner";
import Brands from "@/components/sections/Brands/Brands";
import styles from "@/styles/brand.module.css";

const BrandsPage = () => {
  return (
    <>
      <Banner background={styles.bannerBG} title="Our Brands" subTitle="Your One-Stop Shop for All Your Favorite Brands" />
      <Brands />
    </>
  );
};

export default BrandsPage;
