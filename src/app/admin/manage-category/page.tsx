"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GAButton from "@/components/ui/GAButton";
import GATable from "@/components/ui/GATable";
import { useDebounced } from "@/hooks/useDebounced";
import { Link, useRouter } from "@/lib/router-events";
import { getCategory, useDeleteCategoryMutation, useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import { Category } from "@/types/ApiResponse";
import { Button, Input, Modal, TableColumnProps, message } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useCSVDownloader } from "react-papaparse";
const { confirm } = Modal;

const ManageCategoryPage = () => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const [csvJson, setCsvJson] = useState<Category[]>([] as Category[]);
  const { data: session } = useSession();
  const query: Record<string, any> = {};
  const router = useRouter();
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

  const [deleteCategory] = useDeleteCategoryMutation();
  const { data, isLoading } = useGetCategoriesQuery(
    { params: { ...query, populate: "subCategories" } },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const categories = data?.categories;
  const meta = data?.meta;

  const columns: TableColumnProps<any>[] = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: true,
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Action",
      dataIndex: "id",
      className: "text-center",
      render: function (data: string) {
        return (
          <div className="flex justify-center items-center gap-5">
            <GAButton size="small" onClick={() => router.push(`/admin/manage-category/details/${data}`)}>
              view
            </GAButton>
            <GAButton size="small" onClick={() => router.push(`/admin/manage-category/edit/${data}`)}>
              edit
            </GAButton>
            <GAButton size="small" onClick={() => showDeleteCategoryModal(data)}>
              Delete
            </GAButton>
          </div>
        );
      },
    },
  ];

  const showDeleteCategoryModal = (data: string) => {
    confirm({
      title: "Are you sure delete this category?",
      content: "Press 'Yes' to delete or 'No' to back to previous page",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDeleteCategory(data);
      },
    });
  };

  const handleDeleteCategory = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteCategory({ id });
      if (!!res) {
        message.destroy();
      }
    } catch (err: any) {
      message.destroy();
      message.warning("Failed to delete! try again");
    }
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

  const generateCSV = async () => {
    message.loading({ content: "Generating CSV...", key: "csv" });
    const csvData = await getCategory({});
    setCsvJson(csvData.categories);
    message.success({ content: "CSV Generated", key: "csv" });
  };

  return (
    <div>
      <GAActionBar title="Manage Category">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0  justify-between items-center">
          <GABreadCrumb items={[{ label: "Management" }, { label: "Category" }]} />
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
          <Link href="/admin/manage-category/create">
            <GAButton type="primary">Add Category</GAButton>
          </Link>

          {csvJson.length > 0 ? (
            <CSVDownloader type={Type.Link} filename={"categories"} bom={true} data={csvJson}>
              <GAButton style={{ margin: "0px 5px" }} type="primary">
                Download CSV
              </GAButton>
            </CSVDownloader>
          ) : (
            <GAButton style={{ margin: "0px 5px" }} type="primary" onClick={generateCSV}>
              Generate CSV
            </GAButton>
          )}
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
        dataSource={categories}
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

export default ManageCategoryPage;
