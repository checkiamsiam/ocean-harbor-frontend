"use client";
import { useRouter } from "@/lib/router-events";
import { CategoryBrand } from "@/types/ApiResponse";
import { Select, SelectProps } from "antd";
import { useParams, useSearchParams } from "next/navigation";

const SelectCategory = ({ categories }: { categories: CategoryBrand[] }) => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const { subCategoryId, limit , page , ...rest } = searchQuery;
  const handleChange: SelectProps["onChange"] = (value) => {
    const newQuery = { ...rest, categoryId: value };
    router.replace(`/brands/${params.brandSlug}?${new URLSearchParams(newQuery)}`);
  };

  return (
    <div>
      <Select
        options={categories?.map((cb) => {
          return { label: cb?.category?.title, value: cb?.category?.id };
        })}
        value={
          searchQuery.categoryId
            ? { label: categories.find((cb) => cb.category.id === searchQuery.categoryId)?.category.title, value: searchQuery.categoryId }
            : undefined
        }
        style={{ width: "200px" }}
        placeholder={"Category"}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectCategory;
