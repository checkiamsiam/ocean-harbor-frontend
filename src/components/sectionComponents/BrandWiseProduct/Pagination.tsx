"use client";
import { useRouter } from "@/lib/router-events";
import { Pagination, PaginationProps } from "antd";
import { useParams,  useSearchParams } from "next/navigation";

const BrandProductPagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const handleChange: PaginationProps["onChange"] = (current, pageSize) => {
    const newQuery = { ...searchQuery, limit: String(pageSize), page: String(current) };
    router.replace(`/brands/${params.brandSlug}?${new URLSearchParams(newQuery)}`);
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

export default BrandProductPagination;
