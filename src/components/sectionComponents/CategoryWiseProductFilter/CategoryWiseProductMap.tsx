import ProductCard from "@/components/common/ProductCard";
import { getProducts } from "@/redux/features/product/productApi";
import { IQuery } from "@/types";

const CategoryWiseProductMap = async ({ queryParams }: { queryParams: IQuery }) => {
  const data = await getProducts({ params: queryParams });
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {data && data?.products?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default CategoryWiseProductMap;
