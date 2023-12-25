"use client";
import { useGetSubCategoriesQuery } from "@/redux/features/subCategory/subCategoryApi";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import FormSelectField, { SelectOptions } from "./FormSelectField";

type Props = {
  name: string;
  label?: string;
  size?: "small" | "large" | undefined;
};

const GASubCategorySelect = ({ name, label, size = "large" }: Props) => {
  const { getValues, watch } = useFormContext();
  const { data, isLoading } = useGetSubCategoriesQuery({});

  const categories = data?.subCategories;

  const [options, setOptions] = useState<SelectOptions[]>([]);

  useEffect(() => {
    const handleFormChange = () => {
      const categoryId = getValues("categoryId");
      const gaCategoryOption: SelectOptions[] =
        !categories || !getValues("categoryId")
          ? []
          : categories
              ?.filter((item) => item.categoryId === categoryId)
              .map((item) => ({
                label: item?.title,
                value: item?.id,
              }));

      setOptions(gaCategoryOption);
    };

    // Trigger the effect on initial render and any form changes
    handleFormChange();
    watch(handleFormChange); // Use `control.watch` to track changes
  }, [getValues, categories, watch]);

  return <FormSelectField loading={isLoading} name={name} label={label} size={size} options={options} />;
};

export default GASubCategorySelect;
