"use client";
import { useRouter } from "@/lib/router-events";
import { Brand } from "@/types/ApiResponse";
import { Select, SelectProps } from "antd";

const SelectBrand = ({ allBrands, currentBrand }: { allBrands: Brand[]; currentBrand: Brand }) => {
  const router = useRouter();
  const handleChange: SelectProps["onChange"] = (value) => {
    router.replace(`/brands/${value}`);
  };
  return (
    <div>
      <Select
        options={allBrands?.map((b) => {
          return { label: b.title, value: b.id };
        })}
        value={{ label: currentBrand?.title, value: currentBrand?.id }}
        style={{ width: "200px" }}
        placeholder={"Brand"}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectBrand;
