import FooterHead from "../../sectionComponents/Footer/FooterHead";
import FooterMain from "../../sectionComponents/Footer/FooterMain";
import FooterRights from "../../sectionComponents/Footer/FooterRights";

const Footer = () => {
  return (
    <div className="bg-secondary py-10 text-gray-300">
      <div className="ga-container">
        <div>
          <FooterHead />
          <FooterMain />
          <FooterRights />
        </div>
      </div>
    </div>
  );
};

export default Footer;
