"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GATable from "@/components/ui/GATable";
import { useDebounced } from "@/hooks/useDebounced";
import { Link } from "@/lib/router-events";
import { useDeclineAccountRequestMutation, useGetAccountRequestsQuery } from "@/redux/features/accountRequest/accoutRequestApi";
import { Button, Input, Modal, TableColumnProps, Tooltip, message } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
const { confirm } = Modal;

const AccountRequestsPage = () => {
  const { data: session } = useSession();
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sort"] = !!sortBy && !!sortOrder && sortOrder === "asc" ? sortBy : sortOrder === "desc" ? `-${sortBy}` : undefined;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchKey"] = debouncedTerm;
  }

  const [acceptCustomer] = useDeclineAccountRequestMutation();

  const { data, isLoading } = useGetAccountRequestsQuery(
    { params: { ...query } },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const requests = data?.requests;
  const meta = data?.meta;

  const columns: TableColumnProps<any>[] = [
    {
      title: "ID",
      dataIndex: "id",
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
      title: "Action",
      dataIndex: "id",
      render: function (data: string) {
        return (
          <div className="flex justify-center items-center gap-5">
            <Tooltip title="Decline Request" key={`dar-${data}`}>
              <span onClick={() => showDeclineAccountRequest(data)} className="cursor-pointer text-blue-400 underline">
                decline
              </span>
            </Tooltip>
            <Tooltip title="Accept Request" key={`aar-${data}`}>
              <Link href={`/admin/account-requests/accept/${data}`} className="cursor-pointer text-blue-400 underline">
                accept
              </Link>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const handleDeclineAccountRequest = async (id: string) => {
    message.loading("Declining Request.....");
    try {
      const res = await acceptCustomer({ id }).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Your request to decline registration has been sent successful");
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to Decline! try again");
    }
  };

  const showDeclineAccountRequest = (data: string) => {
    confirm({
      title: "Are you sure decline this registration request?",
      content: "Press 'Ok' to decline this order or 'Cancel' to back to previous page",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDeclineAccountRequest(data);
      },
    });
  };
  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    if (!(order === undefined || field === undefined)) {
      setSortBy(field as string);
      setSortOrder(order === "ascend" ? "asc" : "desc");
    }
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <GAActionBar title="Account Requests">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0  justify-between items-center">
          <GABreadCrumb items={[{ label: "Accounts" }, { label: "Requests" }]} />
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
        dataSource={requests}
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

export default AccountRequestsPage;
