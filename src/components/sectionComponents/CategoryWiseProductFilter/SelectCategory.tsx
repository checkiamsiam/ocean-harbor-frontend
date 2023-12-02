"use client";
import { Select, SelectProps } from "antd";
import { useParams,  useSearchParams } from "next/navigation";
import { useRouter } from "@/lib/router-events";

const SelectCategory = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleChange: SelectProps["onChange"] = (value) => {
    const searchQuery = Object.fromEntries(searchParams.entries());
    const { subCategory, brand, ...rest } = searchQuery;
    router.replace(`/categories/${value}?${new URLSearchParams(rest)}`);
  };

  return (
    <div>
      <Select
        // loading={loading}
        options={[
          { label: "Food", value: "food" },
          { label: "Drinks", value: "drinks" },
          { label: "Electronics", value: "electronics" },
          { label: "Clothing", value: "clothing" },
          { label: "Furniture", value: "furniture" },
          { label: "Books", value: "books" },
          { label: "Toys", value: "toys" },
          { label: "Sports", value: "sports" },
          { label: "Health", value: "health" },
          { label: "Beauty", value: "beauty" },
          { label: "Jewelery", value: "jewelery" },
          { label: "Automotive", value: "automotive" },
        ]}
        value={params.catSlug}
        style={{ width: "200px" }}
        placeholder={"Category"}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectCategory;
