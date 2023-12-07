"use client";
import { useRouter } from "@/lib/router-events";
import { CategoryBrand } from "@/types/ApiResponse";
import { Select, SelectProps } from "antd";
import { useParams, useSearchParams } from "next/navigation";

const SelectBrand = ({ brands }: { brands: CategoryBrand[] }) => {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const searchQuery = Object.fromEntries(searchParams.entries());
  const handleChange: SelectProps["onChange"] = (value) => {
    const newQuery = { ...searchQuery, brandId: value };
    router.replace(`/categories/${params.catSlug}?${new URLSearchParams(newQuery)}`);
  };

  return (
    <div>
      <Select
        options={brands?.map((cb) => {
          return { label: cb.brand.title, value: cb.brand.id };
        })}
        value={
          searchQuery.brandId ? { label: brands.find((c) => c.brand.id === searchQuery.brandId)?.brand.title, value: searchQuery.brandId } : undefined
        }
        style={{ width: "200px" }}
        placeholder={"Brand"}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectBrand;
