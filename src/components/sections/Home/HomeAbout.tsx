import WeAreInNumber from "@/components/sectionComponents/HomeAbout/WeAreInNumber";
import WeAreInWord from "@/components/sectionComponents/HomeAbout/WeAreInWord";
import { Col, Row } from "antd";

const HomeAbout = () => {
  return (
    <div className="ga-container">
      <div className="py-10">
        <h1 className="text-body ">
        Golden Anchor, your ultimate source for premium food and supply distribution, serving small local shops, wholesalers, and supermarkets.
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
