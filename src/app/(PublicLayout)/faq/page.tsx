import Banner from "@/components/common/Banner";
import FaqQue from "@/components/sections/FAQ/FaqQue";
import styles from "@/styles/faq.module.css";

const FAQPage = () => {
  return (
    <>
      <Banner
        background={styles.bannerBG}
        title="Frequently Asked Questions"
        subTitle="We’re here to help. Find answers to common questions below or contact us through contact page"
      />
      <FaqQue />
    </>
  );
};

export default FAQPage;
