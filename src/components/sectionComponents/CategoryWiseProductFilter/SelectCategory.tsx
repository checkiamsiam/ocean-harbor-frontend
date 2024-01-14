"use client";
import { useRouter } from "@/lib/router-events";
import { Category } from "@/types/ApiResponse";
import { Select, SelectProps } from "antd";

const SelectCategory = ({ categories, categoryId }: { categories: Category[]; categoryId: string }) => {
  const router = useRouter();
  const handleChange: SelectProps["onChange"] = (value) => {
    router.replace(`/categories/${value}`);
  };

  return (
    <div>
      {categories && (
        <Select
          options={categories?.map((c) => {
            return { label: c.title, value: c.id };
          })}
          value={{ label: categories?.find((c) => c.id === categoryId)?.title, value: categoryId }}
          style={{ width: "200px" }}
          placeholder={"Category"}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default SelectCategory;
