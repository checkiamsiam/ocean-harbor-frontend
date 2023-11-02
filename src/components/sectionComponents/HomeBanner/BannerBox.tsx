import Image from "next/image";

const BannerBox = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div>
      <div>
        <Image src="/img/GOLDEN-ANCHOR-PNG-LOGO.png" alt="golden anchor logo" width={100} height={100} />
        <h1 className="text-heading text-primary italic">{title}</h1>
        <p className="text-body text-white italic font-bold">{subTitle}</p>
      </div>
    </div>
  );
};

export default BannerBox;
