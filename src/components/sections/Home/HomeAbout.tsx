import WeAreInNumber from "@/components/sectionComponents/HomeAbout/WeAreInNumber";
import WeAreInWord from "@/components/sectionComponents/HomeAbout/WeAreInWord";
import { Col, Row } from "antd";

const HomeAbout = () => {
  return (
    <div className="ga-container">
      <div className="py-10">
        <h1 className="text-body ">
        Ocean Harbor, your premier destination for exceptional seafood trading, serving retail seafood shops, prominent supermarkets, and culinary enthusiasts.
        </h1>
        <div className="mt-5">
          <Row gutter={[10, 10]}>
            <Col span={24} md={12}>
              <WeAreInWord />
            </Col>
            <Col span={24} md={12}>
              <WeAreInNumber />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
