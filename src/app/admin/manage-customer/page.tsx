"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GAButton from "@/components/ui/GAButton";
import GATable from "@/components/ui/GATable";
import { useDebounced } from "@/hooks/useDebounced";
import { Link } from "@/lib/router-events";
import { setCurrentOrderId, toggleOrderItemDrawer } from "@/redux/features/CustomerDashboard/CustomerDashboardSlice";
import { useGetCustomersQuery } from "@/redux/features/user/userApi";
import { useAppDispatch } from "@/redux/hooks";
import { Button, Input, TableColumnProps } from "antd";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";

const ManageCustomerPage = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string[] | null>(null);

  query["limit"] = size;
  query["page"] = page;
  query["sort"] = !!sortBy && !!sortOrder && sortOrder === "asc" ? sortBy : sortOrder === "desc" ? `-${sortBy}` : undefined;
  query["status"] = statusFilter ? statusFilter.join(",") : undefined;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchKey"] = debouncedTerm;
  }
  const { data, isLoading } = useGetCustomersQuery(
    { params: { ...query, populate: "user" } },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const customers = data?.customers;
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
      title: "Status",
      dataIndex: "status",
      filters: [
        { text: "Active", value: "active" },
        { text: "Disabled", value: "disabled" },
      ],
      filterMultiple: false,
    },
    {
      title: "Joined At",
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
    setStatusFilter(filter.status);
    const { order, field } = sorter;
    if (!(order === undefined || field === undefined)) {
      setSortBy(field as string);
      setSortOrder(order === "ascend" ? "asc" : "desc");
    }
  };

  const handleOnRowClick = (id: string) => {
    dispatch(setCurrentOrderId(id));
    dispatch(toggleOrderItemDrawer());
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
    setStatusFilter(null);
  };

  return (
    <div>
      <GAActionBar title="Quotation Requests">
        <div className="flex md:flex-row flex-col gap-5  justify-between items-center">
          <GABreadCrumb items={[{ label: "Accounts" }, { label: "Manage Customer" }]} />
          <div className="w-full md:w-1/4">
            <Input
              type="text"
              size="middle"
              value={searchTerm}
              placeholder="Search..."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <Link href="/admin/manage-customer/create">
            <GAButton type="primary">Add Customer</GAButton>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button style={{ margin: "0px 5px" }} type="primary" onClick={resetFilters}>
              <AiOutlineReload />
            </Button>
          )}
        </div>
      </GAActionBar>

      <GATable
        loading={isLoading}
        columns={columns}
        dataSource={customers}
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

export default ManageCustomerPage;
