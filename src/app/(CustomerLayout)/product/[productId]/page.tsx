import ProductHero from "@/components/sections/ProductDetail/ProductHero";

const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <ProductHero />
    </div>
  );
};

export default ProductDetailPage;
