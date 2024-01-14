import GALogo from "@/components/common/OHLogo";

const BannerBox = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div>
      <div>
        <GALogo />
        <h1 className="text-[2rem] text-primary ">{title}</h1>
        <p className="text-body text-white  font-bold">{subTitle}</p>
      </div>
    </div>
  );
};

export default BannerBox;
