import Banner from "@/components/common/Banner";
import Brands from "@/components/sections/Brands/Brands";
import styles from "@/styles/brand.module.css";

const BrandsPage = () => {
  return (
    <>
      <Banner background={styles.bannerBG} title="Our Brands" subTitle="The Finest Selection of Top-Quality Brands" />
      <Brands />
    </>
  );
};

export default BrandsPage;
