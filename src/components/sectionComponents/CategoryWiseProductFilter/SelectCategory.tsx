"use client";
import { useRouter } from "@/lib/router-events";
import { Category } from "@/types/ApiResponse";
import { Select, SelectProps } from "antd";
import { useParams, useSearchParams } from "next/navigation";

const SelectCategory = ({ categories }: { categories: Category[] }) => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleChange: SelectProps["onChange"] = (value) => {
    const searchQuery = Object.fromEntries(searchParams.entries());
    const { subCategoryId, brandId, ...rest } = searchQuery;
    router.replace(`/categories/${value}?${new URLSearchParams(rest)}`);
  };

  return (
    <div>
      {categories && (
        <Select
          options={categories?.map((c) => {
            return { label: c.title, value: c.id };
          })}
          value={{ label: categories?.find((c) => c.id === params.catSlug)?.title, value: params.catSlug }}
          style={{ width: "200px" }}
          placeholder={"Category"}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default SelectCategory;
