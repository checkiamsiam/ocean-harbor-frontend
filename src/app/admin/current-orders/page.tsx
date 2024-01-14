"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GAButton from "@/components/ui/GAButton";
import GATable from "@/components/ui/GATable";
import { Link, useRouter } from "@/lib/router-events";
import { setCurrentOrderId, toggleOrderItemDrawer } from "@/redux/features/dashboard/dashboardSlice";
import { useGetAllOrdersQuery, useUpdateOrderMutation } from "@/redux/features/order/orderApi";
import { useAppDispatch } from "@/redux/hooks";
import { OrderStatus } from "@/types/ApiResponse";
import { Modal, TableColumnProps, Tooltip, message } from "antd";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const { confirm } = Modal;

const CurrentOrderPage = () => {
  const { data: session } = useSession();
  const searchQuery = useSearchParams();
  const dispatch = useAppDispatch();
  const query: Record<string, any> = {};
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<OrderStatus[]>([OrderStatus.ordered, OrderStatus.orderInProcess]);

  query["id"] = searchQuery.get("id") || undefined;
  query["limit"] = size;
  query["page"] = page;
  query["sort"] = !!sortBy && !!sortOrder && sortOrder === "asc" ? sortBy : sortOrder === "desc" ? `-${sortBy}` : undefined;
  const [markAsDelivered] = useUpdateOrderMutation();
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
        return <>{data === OrderStatus.ordered ? "Confirmed" : data === OrderStatus.orderInProcess ? "Invoiced" : data}</>;
      },
      filters: [
        {
          text: "Confirmed",
          value: OrderStatus.ordered,
        },
        {
          text: "Invoiced",
          value: OrderStatus.orderInProcess,
        },
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
      key: "invoice",
      className: "text-center",
      render: function (data) {
        return data?.invoice ? (
          <a href={data?.invoice}>download </a>
        ) : (
          <GAButton size="small" onClick={() => router.push(`/admin/current-orders/add-invoice/${data?.id}`)}>
            Add
          </GAButton>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <GAButton size="small" onClick={() => showMarkAsDeliveredConfirm(data)}>
            Mark Delivered
          </GAButton>
        );
      },
      sorter: true,
    },
  ];

  const showMarkAsDeliveredConfirm = (data: string) => {
    confirm({
      title: "Are you sure you want to mark this order as delivered?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        showMarkAsDeliveredOrder(data);
      },
    });
  };

  const showMarkAsDeliveredOrder = async (id: string) => {
    message.loading("Marking As Delivered.....");
    try {
      const res = await markAsDelivered({
        id,
        data: {
          status: OrderStatus.delivered,
        },
      }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Order Marked As Delivered Successfully!");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to Mark As Delivered! try again");
    }
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    if (filter.status) {
      setStatusFilter(filter.status);
    } else {
      setStatusFilter([OrderStatus.ordered, OrderStatus.orderInProcess]);
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

export default CurrentOrderPage;
