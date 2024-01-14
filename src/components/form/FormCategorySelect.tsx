"use client";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";

type Props = {
  name: string;
  label?: string;
  size?: "small" | "large" | undefined;
};

const GACategorySelect = ({ name, label , size = "large" }: Props) => {
  const { data, isLoading } = useGetCategoriesQuery({});
  const categories = data?.categories;
  const gaCategoryOption: SelectOptions[] = !categories
    ? []
    : categories?.map((item) => {
        return {
          label: item?.title,
          value: item?.id,
        };
      });

  return <FormSelectField loading={isLoading} name={name} label={label} size={size} options={gaCategoryOption} />;
};

export default GACategorySelect;
