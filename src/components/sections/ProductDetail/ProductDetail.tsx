import ProductCartAction from "@/components/common/ProductCartAction";
import ProductImage from "@/components/sectionComponents/ProductDetail/ProductImage";
import ProductInfo from "@/components/sectionComponents/ProductDetail/ProductInfo";
import { Col, Row } from "antd";

const ProductHero = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          <Row gutter={[20, 20]}>
            <Col span={24} md={10}>
              <ProductImage url="/img/product-dummy.png" />
            </Col>
            <Col span={24} md={14}>
              <div className="md:p-5">
                <div>
                <ProductInfo />
                <div className="mt-5">
                  <ProductCartAction />
                </div>
                </div>
                
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
