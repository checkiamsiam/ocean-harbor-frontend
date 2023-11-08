"use client";
import { Select, SelectProps } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const SelectCategory = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const { subCategory, ...rest } = searchQuery;
  const handleChange: SelectProps["onChange"] = (value) => {
    const newQuery = { ...rest, category: value };
    router.push(`/brands/${params.brandSlug}?${new URLSearchParams(newQuery)}`);
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
        value={searchQuery.category}
        style={{ width: "200px" }}
        placeholder={"Category"}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectCategory;
