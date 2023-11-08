"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  loading?: boolean;
  handleChange?: (el: string) => void;
};

const FormSelectField = ({
  name,
  size = "small",
  value,
  placeholder = "select",
  options,
  loading,
  label,
  defaultValue,
  style,
  handleChange,
}: SelectFieldProps & { style ?: Record<string, any> }) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={handleChange ? handleChange : onChange}
            size={size}
            loading={loading}
            options={options}
            value={value}
            defaultValue={defaultValue}
            style={{
              width: "100%",
              borderRadius: 0,
              fontSize: "15px",
              backgroundColor: "#FAFAFA",
              ...style,
            }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
