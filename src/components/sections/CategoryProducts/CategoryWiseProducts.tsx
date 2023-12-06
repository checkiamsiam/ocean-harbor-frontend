"use client";
import ProductCard from "@/components/common/ProductCard";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { useParams, useSearchParams } from "next/navigation";

const CategoryWiseProducts = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const queryParamsForProductQuery = { ...searchQuery, categoryId: params.catSlug, limit: searchQuery.limit || 12, page: searchQuery.page || 1 };
  const { data, isLoading } = useGetProductsQuery({ params: queryParamsForProductQuery }, { refetchOnMountOrArgChange: true });
  console.log(data);
  return (
    <div>
      <div className="ga-container">
        <div className="pb-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {!isLoading && data && data?.products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProducts;
