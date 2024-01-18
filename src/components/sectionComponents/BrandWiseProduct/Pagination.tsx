"use client";
import { useRouter } from "@/lib/router-events";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import { Pagination, PaginationProps } from "antd";
import { useParams, useSearchParams } from "next/navigation";

const BrandProductPagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const queryParamsForProductQuery = { ...searchQuery, brandId: params.brandSlug, limit: searchQuery.limit || 12, page: searchQuery.page || 1 };
  const { data, isLoading } = useGetProductsQuery({ params: queryParamsForProductQuery }, { refetchOnMountOrArgChange: true });
  const handleChange: PaginationProps["onChange"] = (current, pageSize) => {
    const newQuery = { ...searchQuery, limit: String(pageSize), page: String(current) };
    router.replace(`/brands/${params.brandSlug}?${new URLSearchParams(newQuery)}`);
  };
  return (
    <div>
      {data && !isLoading && (
        <Pagination
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
          size="small"
          showLessItems
          current={Number(searchQuery.page) || 1}
          total={data?.meta?.total}
          pageSizeOptions={[12, 24, 48]}
          defaultPageSize={12}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default BrandProductPagination;
