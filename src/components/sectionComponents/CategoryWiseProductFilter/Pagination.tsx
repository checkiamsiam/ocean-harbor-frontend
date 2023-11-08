"use client";
import { Pagination, PaginationProps } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const CategoryProductPagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const handleChange: PaginationProps["onChange"] = (current, pageSize) => {
    const newQuery = { ...searchQuery, limit: String(pageSize), page: String(current) };
    router.replace(`/categories/${params.catSlug}?${new URLSearchParams(newQuery)}`);
  };
  return (
    <div>
      <Pagination
        size="small"
        showLessItems
        defaultCurrent={1}
        total={500}
        pageSizeOptions={[12, 24, 48]}
        onChange={handleChange}
      />
    </div>
  );
};

export default CategoryProductPagination;
