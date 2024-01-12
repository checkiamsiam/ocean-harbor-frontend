import ProductCard from "@/components/common/ProductCard";
import { getProducts } from "@/redux/features/product/productApi";
import { IQuery } from "@/types";
import { ProductStatus } from "@/types/ApiResponse";
import { Empty } from "antd";

const CategoryWiseProducts = async ({ searchQuery, categoryId }: { searchQuery: IQuery; categoryId: string }) => {
  const queryParamsForProductQuery = {
    ...searchQuery,
    status: ProductStatus.active,
    categoryId,
    limit: searchQuery.limit || 12,
    page: searchQuery.page || 1,
  };
  const data = await getProducts({ params: queryParamsForProductQuery });
  return (
    <div>
      <div className="ga-container">
        <div className="pb-5">
          {data && data.products.length > 0 ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
              {data?.products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <Empty description="There is no product" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProducts;
