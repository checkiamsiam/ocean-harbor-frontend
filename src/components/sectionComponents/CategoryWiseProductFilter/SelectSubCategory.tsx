"use client";
import { useRouter } from "@/lib/router-events";
import { SubCategory } from "@/types/ApiResponse";
import { Select, SelectProps } from "antd";
import { useParams, useSearchParams } from "next/navigation";

const SelectSubCategory = ({ subCategories }: { subCategories: SubCategory[];  }) => {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const { subCategoryId, limit , page , ...rest } = searchQuery;
  const handleChange: SelectProps["onChange"] = (value) => {
    const newQuery = { ...rest, subCategoryId: value };
    router.replace(`/categories/${params.catSlug}?${new URLSearchParams(newQuery)}`);
  };

  return (
    <div>
      <Select
        options={subCategories?.map((subCategory) => {
          return { label: subCategory.title, value: subCategory.id };
        })}
        value={
          searchQuery.subCategoryId
            ? { label: subCategories.find((c) => c.id === searchQuery.subCategoryId)?.title, value: searchQuery.subCategoryId }
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
