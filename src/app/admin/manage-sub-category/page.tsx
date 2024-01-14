"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GAButton from "@/components/ui/GAButton";
import GATable from "@/components/ui/GATable";
import { useDebounced } from "@/hooks/useDebounced";
import { Link, useRouter } from "@/lib/router-events";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import { getSubCategory, useDeleteSubCategoryMutation, useGetSubCategoriesQuery } from "@/redux/features/subCategory/subCategoryApi";
import { SubCategory } from "@/types/ApiResponse";
import { Button, Input, Modal, TableColumnProps, message } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useCSVDownloader } from "react-papaparse";
const { confirm } = Modal;

const ManageSubCategoryPage = () => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const [csvJson, setCsvJson] = useState<SubCategory[]>([] as SubCategory[]);
  const { data: session } = useSession();
  const query: Record<string, any> = {};
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  query["limit"] = size;
  query["page"] = page;
  query["sort"] = !!sortBy && !!sortOrder && sortOrder === "asc" ? sortBy : sortOrder === "desc" ? `-${sortBy}` : undefined;
  query["categoryId"] = categoryFilter ? categoryFilter : undefined;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchKey"] = debouncedTerm;
  }

  const [deleteCategory] = useDeleteSubCategoryMutation();
  const { data: categoryData } = useGetCategoriesQuery({}, { refetchOnMountOrArgChange: true });
  const { data, isLoading } = useGetSubCategoriesQuery(
    { params: { ...query, populate: "category" } },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const subCategories = data?.subCategories;
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
      title: "Category",
      dataIndex: "category",
      render: function (data) {
        return data?.title;
      },
      filters: categoryData?.categories?.map((c) => {
        return { text: c.title, value: c.id };
      }),
      filterMultiple: false,
      filterSearch: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      className: "text-center",
      render: function (data: string) {
        return (
          <div className="flex justify-center items-center gap-5">
            <GAButton size="small" onClick={() => router.push(`/admin/manage-sub-category/details/${data}`)}>
              view
            </GAButton>
            <GAButton size="small" onClick={() => router.push(`/admin/manage-sub-category/edit/${data}`)}>
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
      title: "Are you sure delete this sub-category?",
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
    if (!!filter.category) {
      setCategoryFilter(filter.category[0]);
    } else {
      setCategoryFilter(null);
    }
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
    setCategoryFilter(null);
  };

  const generateCSV = async () => {
    message.loading({ content: "Generating CSV...", key: "csv" });
    const csvData = await getSubCategory({});
    setCsvJson(csvData.subCategory);
    message.success({ content: "CSV Generated", key: "csv" });
  };

  return (
    <div>
      <GAActionBar title="Manage Sub-Category">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0  justify-between items-center">
          <GABreadCrumb items={[{ label: "Management" }, { label: "Sub-Category" }]} />
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
          <Link href="/admin/manage-sub-category/create">
            <GAButton type="primary">Add Sub-Category</GAButton>
          </Link>
          {csvJson.length > 0 ? (
            <CSVDownloader type={Type.Link} filename={"sub-categories"} bom={true} data={csvJson}>
              <GAButton style={{ margin: "0px 5px" }} type="primary">
                Download CSV
              </GAButton>
            </CSVDownloader>
          ) : (
            <GAButton style={{ margin: "0px 5px" }} type="primary" onClick={generateCSV}>
              Generate CSV
            </GAButton>
          )}
          {(!!sortBy || !!sortOrder || !!searchTerm || !!categoryFilter) && (
            <Button style={{ margin: "0px 5px" }} type="primary" onClick={resetFilters}>
              <AiOutlineReload />
            </Button>
          )}
        </div>
      </GAActionBar>

      <GATable
        loading={isLoading}
        columns={columns}
        dataSource={subCategories}
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

export default ManageSubCategoryPage;
