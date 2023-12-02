"use client";
import { Select, SelectProps } from "antd";
import { useParams,  useSearchParams } from "next/navigation";
import { useRouter } from "@/lib/router-events";

const SelectSubCategory = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const handleChange: SelectProps["onChange"] = (value) => {
    const newQuery = { ...searchQuery, subCategory: value };
    router.replace(`/categories/${params.catSlug}?${new URLSearchParams(newQuery)}`);
  };
  return (
    <div>
      <Select
        // loading={loading}
        options={[
          { label: "Food", value: "food" },
          { label: "Drinks", value: "drinks" },
        ]}
        value={searchQuery.subCategory}
        style={{ width: "200px" }}
        placeholder={"Sub Category"}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectSubCategory;
