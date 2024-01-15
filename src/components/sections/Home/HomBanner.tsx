import styles from "@/styles/home.module.css";
import { Carousel } from "antd";
import BannerBox from "../../sectionComponents/HomeBanner/BannerBox";

const HomBanner = () => {
  return (
    <div>
      <div className="h-1 w-full bg-primary rounded-md"></div>
      <Carousel dots={false} effect="fade" autoplay waitForAnimate pauseOnHover={false} autoplaySpeed={2500} rootClassName="z-30">
        <div className={`h-[450px] w-full ${styles.bannerBg1} `}>
          <div className="ga-container flex w-full h-full items-center">
            <BannerBox title="Premium Seafood Trading" subTitle="Finest seafood products, quality, sustainability, value." />
          </div>
        </div>
        <div className={`h-[450px] w-full ${styles.bannerBg2} `}>
          <div className="ga-container flex w-full h-full items-center">
            <BannerBox title="Savor the Sea’s Richness" subTitle="Exquisite flavors and benefits of premium seafood." />
          </div>
        </div>
        <div className={`h-[450px] w-full ${styles.bannerBg3} `}>
          <div className="ga-container flex w-full h-full items-center">
            <BannerBox title="Excellence in Seafood Trading" subTitle="Diverse and delicious seafood products, leading platform." />
          </div>
        </div>
        <div className={`h-[450px] w-full ${styles.bannerBg4} `}>
          <div className="ga-container flex w-full h-full items-center">
            <BannerBox title="Explore the Ocean’s Treasures" subTitle="Amazing variety and quality of seafood products." />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomBanner;
