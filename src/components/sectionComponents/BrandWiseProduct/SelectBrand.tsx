"use client";
import { Select, SelectProps } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const SelectBrand = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const handleChange: SelectProps["onChange"] = (value) => {
    const { category, subCategory, ...rest } = searchQuery;
    router.replace(`/brands/${value}?${new URLSearchParams(rest)}`);
  };

  return (
    <div>
      <Select
        // loading={loading}
        options={[
          { label: "Food", value: "food" },
          { label: "Drinks", value: "drinks" },
        ]}
        value={params.brandSlug}
        style={{ width: "200px" }}
        placeholder={"Brand"}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectBrand;
