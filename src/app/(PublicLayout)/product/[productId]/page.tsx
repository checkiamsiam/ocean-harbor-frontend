import ProductHero from "@/components/sections/ProductDetail/ProductDetail";

const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <ProductHero />
    </div>
  );
};

export default ProductDetailPage;
