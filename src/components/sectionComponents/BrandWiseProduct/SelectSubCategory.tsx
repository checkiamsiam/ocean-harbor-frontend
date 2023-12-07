"use client";
import { useRouter } from "@/lib/router-events";
import { useGetSingleCategoryQuery } from "@/redux/features/category/categoryApi";
import { IQuery } from "@/types";
import { Select, SelectProps } from "antd";

const SelectSubCategory = ({ brandId, searchParams }: { brandId: string; searchParams: IQuery }) => {
  const router = useRouter();
  const { data, isLoading } = useGetSingleCategoryQuery(
    { id: searchParams?.categoryId, params: { populate: "subCategories" } },
    { skip: !searchParams.categoryId }
  );
  const { limit, page, ...rest } = searchParams;
  const handleChange: SelectProps["onChange"] = (value) => {
    const newQuery = { ...rest, subCategoryId: value };
    router.replace(`/brands/${brandId}?${new URLSearchParams(newQuery)}`);
  };
  return (
    <div>
      <Select
        loading={isLoading}
        options={
          data?.category?.subCategories
            ? data?.category.subCategories?.map((subCategory) => {
                return { label: subCategory.title, value: subCategory.id };
              })
            : []
        }
        value={
          searchParams?.subCategoryId
            ? {
                label: data?.category.subCategories?.find((c) => c.id === searchParams.subCategoryId)?.title,
                value: searchParams.subCategoryId,
              }
            : undefined
        }
        style={{ width: "200px" }}
        placeholder={"Sub Category"}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectSubCategory;
