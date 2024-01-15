import Banner from "@/components/common/Banner";
import CategoriesMap from "@/components/sections/Categories/CategoriesMap";
import UserGuide from "@/components/sections/Categories/UserGuide";
import styles from "@/styles/categories.module.css";

const CategoriesPage = () => {
  return (
    <div>
      <Banner background={styles.bannerBG} title="REQUEST PRICE QUOTATION" subTitle="Explore The Finest Selection of Seafood Categories" />
      <UserGuide />
      <CategoriesMap />
    </div>
  );
};

export default CategoriesPage;
