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
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const { confirm } = Modal;

const QuotationRequestsPage = () => {
  const { data: session } = useSession();
  const searchQuery = useSearchParams();
  const dispatch = useAppDispatch();
  const query: Record<string, any> = {};
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["id"] = searchQuery.get("id") || undefined;
  query["limit"] = size;
  query["page"] = page;
  query["sort"] = !!sortBy && !!sortOrder && sortOrder === "asc" ? sortBy : sortOrder === "desc" ? `-${sortBy}` : undefined;
  const { data, isLoading } = useGetAllOrdersQuery(
    { params: { ...query }, status: [OrderStatus.requestQuotation] },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const [ignoreQuotationRequest] = useUpdateOrderMutation();

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
      title: "Requested At",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: string) {
        return (
          <div className="flex justify-center items-center gap-5">
            <GAButton size="small" onClick={() => showIgnoreQuotationRequestConfirm(data)}>
              ignore
            </GAButton>
            <GAButton size="small" onClick={() => router.push(`/admin/quotation-requests/give-quotation/${data}`)}>
            Process
            </GAButton>
          </div>
        );
      },
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

  const showIgnoreQuotationRequestConfirm = (data: string) => {
    confirm({
      title: "Are you sure you want to ignore this quotation request?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleIgnoreQuotationReq(data);
      },
    });
  };

  const handleIgnoreQuotationReq = async (id: string) => {
    message.loading("Ignoring.....");
    try {
      const res = await ignoreQuotationRequest({
        id,
        data: {
          status: OrderStatus.spam,
        },
      }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to ignore quotation request  has been sent successful");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to Ignore! try again");
    }
  };

  return (
    <div>
      <GAActionBar title="Quotation Requests">
        <GABreadCrumb items={[{ label: "Order" }, { label: "Quotation Requests" }]} />
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
