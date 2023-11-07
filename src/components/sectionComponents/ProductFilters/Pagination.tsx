"use client";
import { Pagination, PaginationProps } from "antd";

const CategoryProductPagination = () => {
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (current, pageSize) => {
    console.log(current, pageSize);
  };
  return (
    <div>
      <Pagination size="small" onShowSizeChange={onShowSizeChange} showLessItems defaultCurrent={1} total={500} />
    </div>
  );
};

export default CategoryProductPagination;
