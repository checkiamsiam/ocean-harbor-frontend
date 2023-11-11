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
            <BannerBox title="A World of Flavor" subTitle="Authentic exotic food" />
          </div>
        </div>
        <div className={`h-[450px] w-full ${styles.bannerBg2} `}>
          <div className="ga-container flex w-full h-full items-center">
            <BannerBox title="Explore New Flavor Horizons" subTitle="Authentic exotic Products" />
          </div>
        </div>
        <div className={`h-[450px] w-full ${styles.bannerBg3} `}>
          <div className="ga-container flex w-full h-full items-center">
            <BannerBox title="Savor the World's Unique Flavors" subTitle="A World of Taste Awaits" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomBanner;
