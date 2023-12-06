import ProductCard from "@/components/common/ProductCard";
import ProductPagination from "./Pagination";

const ProductResult = () => {
  return (
    <div>
      <div>
        <div className="flex justify-end ">
          <ProductPagination />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pt-5 pb-10">
          <ProductCard  />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductResult;
