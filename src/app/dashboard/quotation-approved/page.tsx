"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GATable from "@/components/ui/GATable";
import { setCurrentOrderId, toggleOrderItemDrawer } from "@/redux/features/dashboard/dashboardSlice";

import { useConfirmOrderMutation, useDeclineOrderMutation, useGetMyOrdersQuery } from "@/redux/features/order/orderApi";
import { useAppDispatch } from "@/redux/hooks";
import { OrderStatus } from "@/types/ApiResponse";
import { convertStatusText } from "@/utils/convertStatusText";
import { Modal, TableColumnProps, Tooltip, message } from "antd";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const { confirm } = Modal;

const QuotationApprovedPage = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const searchQuery = useSearchParams();
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["id"] = searchQuery.get("id") || undefined;
  query["limit"] = size;
  query["page"] = page;
  query["sort"] = !!sortBy && !!sortOrder && sortOrder === "asc" ? sortBy : sortOrder === "desc" ? `-${sortBy}` : undefined;

  const { data, isLoading } = useGetMyOrdersQuery(
    { params: { ...query }, status: [OrderStatus.quotationApproved] },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const [declineOrder] = useDeclineOrderMutation();
  const [confirmOrder] = useConfirmOrderMutation();

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
      render: function (data: OrderStatus) {
        return <>{convertStatusText(data)}</>;
      },
    },
    {
      title: "Quotation",
      dataIndex: "quotation",
      render: function (data: string) {
        return <a href={data}>download</a>;
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: string) {
        return (
          <div className="flex justify-center items-center gap-2">
            <Tooltip title="Decline Order" color="red" key={`decline-${data}`}>
              <RxCross2
                onClick={() => showDeclineConfirm(data)}
                className="text-icon text-red-400 cursor-pointer hover:bg-primary p-1 rounded-full transition duration-300 ease-in-out"
              />
            </Tooltip>
            <Tooltip title="Accept Order" color="green" key={`accept-${data}`}>
              <GiCheckMark
                onClick={() => showConfirmOrderConfirm(data)}
                className="text-icon text-green-400 cursor-pointer hover:bg-primary p-1 rounded-full transition duration-300 ease-in-out"
              />
            </Tooltip>
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

  const handleDeclineOrder = async (id: string) => {
    message.loading("Declining Order.....");
    try {
      const res = await declineOrder({ id }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to decline order has been sent successful");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to Decline! try again");
    }
  };

  const handleConfirmOrder = async (id: string) => {
    message.loading("Confirming Order.....");
    try {
      const res = await confirmOrder({ id }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to confirm order has been sent successful");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to confirm! try again");
    }
  };

  const handleOnRowClick = (id: string) => {
    dispatch(setCurrentOrderId(id));
    dispatch(toggleOrderItemDrawer());
  };

  const showDeclineConfirm = (data: string) => {
    confirm({
      title: "Are you sure decline this order?",
      content: "Press 'Yes' to decline this order or 'No' to back to previous page",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDeclineOrder(data);
      },
    });
  };
  const showConfirmOrderConfirm = (data: string) => {
    confirm({
      title: "Are you sure confirm this order?",
      content: "Press 'Yes' to confirm this order or 'No' to back to previous page",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleConfirmOrder(data);
      },
    });
  };

  return (
    <div>
      <GAActionBar title="Quotation Approved">
        <GABreadCrumb items={[{ label: "Order" }, { label: "Quotation" }, { label: "Approved" }]} />
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

export default QuotationApprovedPage;
