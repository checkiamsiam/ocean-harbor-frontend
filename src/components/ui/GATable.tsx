"use client";

import { Table, TableColumnProps } from "antd";

type GATableProps = {
  loading?: boolean;
  columns: TableColumnProps<any>[];
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
  onRowClick?: (id: string) => void;
};

const GATable = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
  onRowClick,
}: GATableProps) => {
  const paginationConfig = showPagination
    ? {
        size: "small",
        showLessItems: true,
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig as any}
      onChange={onTableChange}
      scroll={{ x: true }}
      onRow={({ id }) => {
        return {
          onClick: () => onRowClick && onRowClick(id),
        };
      }}
    />
  );
};

export default GATable;
