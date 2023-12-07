import ProductCard from "@/components/common/ProductCard";
import { getProducts } from "@/redux/features/product/productApi";
import { IQuery } from "@/types";

const BrandWiseProducts = async ({ searchQuery, brandId }: { searchQuery: IQuery; brandId: string }) => {
  const queryParamsForProductQuery = { ...searchQuery, brandId, limit: searchQuery.limit || 12, page: searchQuery.page || 1 };
  const data = await getProducts({ params: queryParamsForProductQuery });
  return (
    <div>
      <div className="ga-container">
        <div className="pb-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {data && data?.products?.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandWiseProducts;
