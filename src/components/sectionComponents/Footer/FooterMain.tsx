import { Col, Row } from "antd";
import FooterAdress from "./FooterAdress";
import FooterCertifications from "./FooterCertifications";
import FooterContact from "./FooterContact";
import FooterSiteIndex from "./FooterSiteIndex";

const FooterMain = () => {
  return (
    <div className="py-5">
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} md={8} xl={6}>
          <FooterContact />
        </Col>
        <Col xs={24} sm={12} md={8} xl={6}>
          <FooterAdress />
        </Col>
        <Col xs={24} sm={12} md={8} xl={6}>
          <FooterSiteIndex />
        </Col>
        <Col xs={24} sm={12} md={24} xl={6}>
          <FooterCertifications />
        </Col>
      </Row>
    </div>
  );
};

export default FooterMain;
