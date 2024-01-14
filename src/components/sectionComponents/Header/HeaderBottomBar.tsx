import GALogo from "@/components/common/GALogo";
import { Col, Row } from "antd";
import HeaderUserActions from "./HeaderUserActions";
import SearchBar from "./SearchBar";

const HeaderBottomBar = () => {
  return (
    <div className="pt-3">
      <Row justify="center" align="bottom">
        <Col span={0} md={6}>
          <div className="hidden lg:block">
            <GALogo />
          </div>
        </Col>
        <Col span={4} md={10}>
          <div className="hidden lg:block">
            <SearchBar />
          </div>
        </Col>
        <Col span={20} md={8}>
          <HeaderUserActions />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderBottomBar;
