import ProductCartAction from "@/components/common/ProductCartAction";
import ProductImage from "@/components/sectionComponents/ProductDetail/ProductImage";
import ProductInfo from "@/components/sectionComponents/ProductDetail/ProductInfo";
import { getSingleProduct } from "@/redux/features/product/productApi";
import { Col, Row } from "antd";

const ProductHero = async ({ productId }: { productId: string }) => {
  const { product } = await getSingleProduct({
    id: productId,
    params: {
      populate: "category,brand,subCategory",
    },
  });
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          <Row gutter={[20, 20]}>
            <Col span={24} md={10}>
              <ProductImage url={product.image} />
            </Col>
            <Col span={24} md={14}>
              <div className="md:p-5">
                <div>
                  <ProductInfo product={product} />
                  <div className="mt-5">
                    <ProductCartAction product={product} />
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
