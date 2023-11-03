import GALogo from "@/components/common/GALogo";

const BannerBox = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div>
      <div>
        <GALogo />
        <h1 className="text-[2rem] text-primary italic">{title}</h1>
        <p className="text-body text-white italic font-bold">{subTitle}</p>
      </div>
    </div>
  );
};

export default BannerBox;
