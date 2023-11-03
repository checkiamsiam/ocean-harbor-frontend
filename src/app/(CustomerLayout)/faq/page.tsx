import Banner from "@/components/common/Banner";
import FaqQue from "@/components/sections/FAQ/FaqQue";
import styles from "@/styles/faq.module.css";

const FAQPage = () => {
  return (
    <>
      <Banner
        background={styles.bannerBG}
        title="FREQUENTLY ASKED QUESTIONS"
        subTitle="In case you have a question that is not answered below please contact us through the chat or the contact page"
      />
      <FaqQue />
    </>
  );
};

export default FAQPage;
