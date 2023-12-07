import ProductCard from "@/components/common/ProductCard";
import { IMeta } from "@/types";
import { Product } from "@/types/ApiResponse";
import ProductPagination from "./Pagination";

const ProductResult = ({ products, meta }: { products: Product[]; meta: IMeta }) => {
  return (
    <div>
      <div>
        <div className="flex justify-end ">
          <ProductPagination meta={meta} />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pt-5 pb-10">
          {products && products?.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductResult;
