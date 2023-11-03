import GAButton from "../ui/GAButton";

const Banner = ({
  title,
  subTitle,
  action,
  background,
}: {
  title: string;
  subTitle?: string;
  action?: {
    title: string;
    link: string;
  };
  background: string;
}) => {
  return (
    <div>
      <div className={`h-[450px] w-full ${background} `}>
        <div className="ga-container flex w-full h-full items-center justify-center">
          <div>
            <h1 className="text-[2rem] text-primary italic text-center">{title}</h1>
            {subTitle && <p className="text-body text-white italic font-bold mt-1 text-center">{subTitle}</p>}
            {action &&  (
              <div className="flex justify-center mt-5">
                <GAButton arrow>{action.title}</GAButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
