import Banner from "@/components/common/Banner";
import PreOrderInstruction from "@/components/sections/PreOrder/PreOrderInstruction";
import styles from "@/styles/preOrder.module.css";

const PreOrderPage = () => {
  return (
    <>
      <Banner background={styles.bannerBg} title="Pre-order" />
      <PreOrderInstruction />
    </>
  );
};

export default PreOrderPage;
