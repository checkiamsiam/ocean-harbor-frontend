"use client";
import { useGetBrandsQuery } from "@/redux/features/brand/brandApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";

type Props = {
  name: string;
  label?: string;
  size?: "small" | "large" | undefined;
};

const GABrandSelect = ({ name, label, size = "large" }: Props) => {
  const { data, isLoading } = useGetBrandsQuery({});
  const brands = data?.brands;
  const gaCategoryOption: SelectOptions[] = !brands
    ? []
    : brands?.map((item) => {
        return {
          label: item?.title,
          value: item?.id,
        };
      });

  return <FormSelectField loading={isLoading} name={name} label={label} size={size} options={gaCategoryOption} />;
};

export default GABrandSelect;
