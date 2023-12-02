"use client";
import { Pagination, PaginationProps } from "antd";
import {  useSearchParams } from "next/navigation";
import { useRouter } from "@/lib/router-events";

const ProductPagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const handleChange: PaginationProps["onChange"] = (current, pageSize) => {
    const newQuery = { ...searchQuery, limit: String(pageSize), page: String(current) };
    router.replace(`/search?${new URLSearchParams(newQuery)}`);
  };
  return (
    <div>
      <Pagination
        size="small"
        showLessItems
        defaultCurrent={1}
        total={500}
        pageSizeOptions={[12, 24, 48]}
        defaultPageSize={12}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductPagination;
