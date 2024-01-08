"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GATable from "@/components/ui/GATable";
import { Link } from "@/lib/router-events";
import { setCurrentOrderId, toggleOrderItemDrawer } from "@/redux/features/dashboard/dashboardSlice";
import { useGetAllOrdersQuery } from "@/redux/features/order/orderApi";
import { useAppDispatch } from "@/redux/hooks";
import { OrderStatus } from "@/types/ApiResponse";
import { convertStatusText } from "@/utils/convertStatusText";
import { TableColumnProps, Tooltip } from "antd";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const OrderHistoryPage = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const searchQuery = useSearchParams();
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<OrderStatus[]>([OrderStatus.declined, OrderStatus.spam, OrderStatus.delivered]);

  query["id"] = searchQuery.get("id") || undefined;
  query["limit"] = size;
  query["page"] = page;
  query["sort"] = !!sortBy && !!sortOrder && sortOrder === "asc" ? sortBy : sortOrder === "desc" ? `-${sortBy}` : undefined;
  const { data, isLoading } = useGetAllOrdersQuery(
    { params: { ...query }, status: statusFilter },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const orders = data?.orders;
  const meta = data?.meta;

  const columns: TableColumnProps<any>[] = [
    {
      title: "Order ID",
      dataIndex: "id",
      sorter: true,
      render: function (id: string) {
        return (
          <span className="cursor-pointer" onClick={() => handleOnRowClick(id)}>
            {id}
          </span>
        );
      },
    },
    {
      title: "Customer",
      dataIndex: "customerId",
      render: function (id: string) {
        return (
          <div className="flex justify-center items-center gap-5">
            <Tooltip title="View Profile" key={`ocvt-${id}`}>
              <Link href={`/admin/manage-customer/details/${id}`} className="cursor-pointer text-blue-400 underline">
                view
              </Link>
            </Tooltip>
          </div>
        );
      },
    },
    {
      title: "Items",
      dataIndex: "id",
      render: function (id: string) {
        return (
          <div className="flex justify-center items-center">
            <Tooltip title="View Items" key={`ocvit-${id}`}>
              <span className="cursor-pointer text-blue-400 underline" onClick={() => handleOnRowClick(id)}>
                view
              </span>
            </Tooltip>
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      className: "text-center",
      render: function (data: OrderStatus) {
        return <>{convertStatusText(data)}</>;
      },
      filters: [
        { text: "Declined", value: OrderStatus.declined },
        { text: "Delivered", value: OrderStatus.delivered },
        { text: "Ignore", value: OrderStatus.spam },
      ],
    },
    {
      title: "Quotation",
      dataIndex: "quotation",
      className: "text-center",
      render: function (data: string) {
        return data ? <a href={data}>download </a> : "N/A";
      },
    },
    {
      title: "Invoice",
      dataIndex: "invoice",
      className: "text-center",
      render: function (data: string) {
        return data ? <a href={data}>download</a> : "N/A";
      },
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
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
    if (filter.status) {
      setStatusFilter(filter.status);
    } else {
      setStatusFilter([OrderStatus.declined, OrderStatus.spam, OrderStatus.delivered]);
    }

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
      <GAActionBar title="Current Orders">
        <GABreadCrumb items={[{ label: "Order" }, { label: "Current Orders" }]} />
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

export default OrderHistoryPage;
