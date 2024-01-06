"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import GAButton from "@/components/ui/GAButton";
import GATable from "@/components/ui/GATable";
import { useDebounced } from "@/hooks/useDebounced";
import { Link, useRouter } from "@/lib/router-events";
import { useGetBrandsQuery } from "@/redux/features/brand/brandApi";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import { getProducts, useGetProductsQuery } from "@/redux/features/product/productApi";
import { useGetSubCategoriesQuery } from "@/redux/features/subCategory/subCategoryApi";
import { Product } from "@/types/ApiResponse";
import { Button, Input, TableColumnProps, message } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useCSVDownloader } from "react-papaparse";

const ManageProductPage = () => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const [csvJson, setCsvJson] = useState<Product[]>([] as Product[]);
  const { data: session } = useSession();
  const query: Record<string, any> = {};
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [subCategoryFilter, setSubCategoryFilter] = useState<string | null>(null);
  const [brandFilter, setBrandFilter] = useState<string | null>(null);

  query["limit"] = size;
  query["page"] = page;
  query["sort"] = !!sortBy && !!sortOrder && sortOrder === "asc" ? sortBy : sortOrder === "desc" ? `-${sortBy}` : undefined;
  query["categoryId"] = categoryFilter ? categoryFilter : undefined;
  query["subCategoryId"] = subCategoryFilter ? subCategoryFilter : undefined;
  query["brandId"] = brandFilter ? brandFilter : undefined;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchKey"] = debouncedTerm;
  }

  const { data: categoryData } = useGetCategoriesQuery({ params: { populate: "subCategories" } }, { refetchOnMountOrArgChange: true });
  const { data: subCategoryData } = useGetSubCategoriesQuery({}, { refetchOnMountOrArgChange: true });
  const { data: brandData } = useGetBrandsQuery({}, { refetchOnMountOrArgChange: true });
  const { data, isLoading } = useGetProductsQuery(
    { params: { ...query, populate: "brand,category,subCategory" } },
    {
      refetchOnMountOrArgChange: true,
      skip: !session?.accessToken,
    }
  );

  const products = data?.products;
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
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      key: "category",
      render: function (data) {
        return data?.category?.title;
      },
      filters: categoryData?.categories?.map((c) => {
        return { text: c.title, value: c.id };
      }),
      filterMultiple: false,
      filterSearch: true,
    },
    {
      title: "Sub-Category",
      key: "subCategory",
      render: function (data) {
        return data?.subCategory?.title;
      },
      filters: categoryFilter
        ? categoryData?.categories
            ?.find((c) => c.id === categoryFilter)
            ?.subCategories?.map((c) => {
              return { text: c.title, value: c.id };
            })
        : subCategoryData?.subCategories?.map((c) => {
            return { text: c.title, value: c.id };
          }),
      filterMultiple: false,
      filterSearch: true,
    },
    {
      title: "Brand",
      key: "brand",
      render: function (data) {
        return data?.brand?.title;
      },
      filters: brandData?.brands?.map((c) => {
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
            <GAButton size="small" onClick={() => router.push(`/admin/manage-products/details/${data}`)}>
              view
            </GAButton>
            <GAButton size="small" onClick={() => router.push(`/admin/manage-products/edit/${data}`)}>
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
    if (!!filter.category) {
      setCategoryFilter(filter.category[0]);
      filter.subCategory = undefined;
    } else {
      setCategoryFilter(null);
    }
    if (!!filter.subCategory) {
      setSubCategoryFilter(filter.subCategory[0]);
    } else {
      setSubCategoryFilter(null);
    }
    if (!!filter.brand) {
      setBrandFilter(filter.brand[0]);
    } else {
      setBrandFilter(null);
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
    setSubCategoryFilter(null);
    setBrandFilter(null);
  };

  const generateCSV = async () => {
    message.loading({ content: "Generating CSV...", key: "csv" });
    const csvData = await getProducts({});
    setCsvJson(csvData.products);
    message.success({ content: "CSV Generated", key: "csv" });
  };

  return (
    <div>
      <GAActionBar title="Manage Products">
        <div className="flex md:flex-row flex-col gap-5 md:gap-0  justify-between items-center">
          <GABreadCrumb items={[{ label: "Management" }, { label: "Product" }]} />
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
          <Link href="/admin/manage-products/create">
            <GAButton type="primary">Add Product</GAButton>
          </Link>
          {csvJson.length > 0 ? (
            <CSVDownloader type={Type.Link} filename={"products"} bom={true} data={csvJson}>
              <GAButton style={{ margin: "0px 5px" }} type="primary">
                Download CSV
              </GAButton>
            </CSVDownloader>
          ) : (
            <GAButton style={{ margin: "0px 5px" }} type="primary" onClick={generateCSV}>
              Generate CSV
            </GAButton>
          )}
          {(!!sortBy || !!sortOrder || !!searchTerm || !!categoryFilter || !!subCategoryFilter || !!brandFilter) && (
            <Button style={{ margin: "0px 5px" }} type="primary" onClick={resetFilters}>
              <AiOutlineReload />
            </Button>
          )}
        </div>
      </GAActionBar>

      <GATable
        loading={isLoading}
        columns={columns}
        dataSource={products}
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

export default ManageProductPage;
