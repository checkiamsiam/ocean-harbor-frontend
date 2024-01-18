"use client";
import { useRouter } from "@/lib/router-events";
import { IMeta } from "@/types";
import { Pagination, PaginationProps } from "antd";
import { useParams, useSearchParams } from "next/navigation";

const ProductPagination = ({ meta }: { meta: IMeta }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const handleChange: PaginationProps["onChange"] = (current, pageSize) => {
    const newQuery = { ...searchQuery, limit: String(pageSize), page: String(current) };
    router.replace(`/search/${params.searchKey}?${new URLSearchParams(newQuery)}`);
  };
  return (
    <div>
      <Pagination
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
        size="small"
        showLessItems
        defaultCurrent={1}
        total={meta?.total}
        pageSizeOptions={[12, 24, 48]}
        defaultPageSize={12}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductPagination;
