import ProductHero from "@/components/sections/ProductDetail/ProductDetail";

const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <ProductHero productId={params.productId} />
    </div>
  );
};

export default ProductDetailPage;
