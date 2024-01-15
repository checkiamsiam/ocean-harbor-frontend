import Banner from "@/components/common/Banner";
import AboutIntro from "@/components/sections/About/AboutIntro";
import AboutMore from "@/components/sections/About/AboutMore";
import AboutQuotation from "@/components/sections/About/AboutQuotation";
import AboutThenNow from "@/components/sections/About/AboutThenNow";
import styles from "@/styles/about.module.css";

const AboutPage = () => {
  return (
    <>
      <Banner background={styles.bannerBG} title="Welcome to Ocean Harbor BV" subTitle="Your Premier Destination for Exceptional Seafood" />
      <AboutIntro />
      <AboutMore />
      <Banner background={styles.secondaryBannerBG} />
      <AboutThenNow />
      <AboutQuotation />
    </>
  );
};

export default AboutPage;
