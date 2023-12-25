"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GAButton from "@/components/ui/GAButton";
import GATable from "@/components/ui/GATable";
import { useDebounced } from "@/hooks/useDebounced";
import { Link, useRouter } from "@/lib/router-events";
import { useGetCustomersQuery, useUpdateCustomerMutation } from "@/redux/features/user/userApi";
import { CustomerStatus } from "@/types/ApiResponse";
import { Button, Input, Switch, TableColumnProps, message } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";

const ManageCustomerPage = () => {
  const { data: session } = useSession();
  const query: Record<string, any> = {};
  const router = useRouter();
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

  const [updateCustomer] = useUpdateCustomerMutation();
  const { data, isLoading } = useGetCustomersQuery(
    { params: { ...query } },
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
      sorter: true,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Status",
      key: "status",
      filters: [
        { text: "Active", value: CustomerStatus.active },
        { text: "Disabled", value: CustomerStatus.disabled },
      ],
      filterMultiple: false,
      render: function (data) {
        return (
          <div className="flex justify-center">
            <Switch size="small" checked={data.status === CustomerStatus.active} onChange={(e) => handleSwitchStatus(e, data.id)} />
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      className: "text-center",
      render: function (data: string) {
        return (
          <div className="flex justify-center items-center gap-5">
            <GAButton size="small" onClick={() => router.push(`/admin/manage-customer/details/${data}`)}>
              view
            </GAButton>
            <GAButton size="small" onClick={() => router.push(`/admin/manage-customer/edit/${data}`)}>
              edit
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
    setStatusFilter(filter.status);
    const { order, field } = sorter;
    if (!(order === undefined || field === undefined)) {
      setSortBy(field as string);
      setSortOrder(order === "ascend" ? "asc" : "desc");
    }
  };

  const handleSwitchStatus = async (checked: boolean, id: string) => {
    message.loading(checked ? "Making Active..." : "Making Disable...");
    try {
      const res = await updateCustomer({
        id,
        data: {
          status: checked ? CustomerStatus.active : CustomerStatus.disabled,
        },
      }).unwrap();
      if (!!res) {
        message.destroy();
        message.success(`Your request to ${checked ? "active" : "disable"} customer has been sent successful`);
      }
    } catch (err: any) {
      message.destroy();
      message.warning(`Failed to ${checked ? "active" : "disable"} customer! try again`);
    }
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
    setStatusFilter(null);
  };

  return (
    <div>
      <GAActionBar title="Manage Customer">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0  justify-between items-center">
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
          {(!!sortBy || !!sortOrder || !!searchTerm || !!statusFilter) && (
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
