"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GATable from "@/components/ui/GATable";
import { setCurrentOrderId, toggleOrderItemDrawer } from "@/redux/features/dashboard/dashboardSlice";

import { useGetMyOrdersQuery } from "@/redux/features/order/orderApi";
import { useAppDispatch } from "@/redux/hooks";
import { OrderStatus } from "@/types/ApiResponse";
import { convertStatusText } from "@/utils/convertStatusText";
import { TableColumnProps } from "antd";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useState } from "react";

const QuotationRequestsPage = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sort"] = !!sortBy && !!sortOrder && sortOrder === "asc" ? sortBy : sortOrder === "desc" ? `-${sortBy}` : undefined;
  const { data, isLoading } = useGetMyOrdersQuery(
    { params: { ...query }, status: [OrderStatus.requestQuotation] },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const orders = data?.orders;
  const meta = data?.meta;

  const columns: TableColumnProps<any>[] = [
    {
      title: "ID",
      dataIndex: "id",
      render: function (id: string) {
        return (
          <span className="cursor-pointer" onClick={() => handleOnRowClick(id)}>
            {id}
          </span>
        );
      },
    },
    {
      title: "Items",
      dataIndex: "id",
      render: function (id: string) {
        return (
          <div className="flex justify-center items-center">
            <span className="cursor-pointer text-blue-400 underline" onClick={() => handleOnRowClick(id)}>
              view
            </span>
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: function (data: any) {
        return <>{convertStatusText(data)}</>;
      },
    },
    {
      title: "Requested At",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    if (order === undefined || field === undefined) return;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const handleOnRowClick = (id: string) => {
    dispatch(setCurrentOrderId(id));
    dispatch(toggleOrderItemDrawer());
  };

  return (
    <div>
      <GAActionBar title="Quotation Requests">
        <GABreadCrumb items={[{ label: "Order" }, { label: "Quotation" }, { label: "Requests" }]} />
      </GAActionBar>

      <GATable
        loading={isLoading}
        columns={columns}
        dataSource={orders}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default QuotationRequestsPage;
