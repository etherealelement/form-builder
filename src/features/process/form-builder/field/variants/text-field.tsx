import { Input } from "@/shared/ui/input";
import { FieldProps, FieldValue, TextFieldConfig } from "../types";
import { BaseLabel } from "../filed-base";
import { useId } from "react";

export function TextField({
  config,
  value,
  onChange,
}: FieldProps<TextFieldConfig>) {
  const id = useId();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <BaseLabel id={id}>{config.label}</BaseLabel>
      <Input
        id={id}
        name={config.name}
        value={parseValue(value)}
        onChange={handleChange}
      />
    </>
  );
}

const parseValue = (value: FieldValue) => {
  if (typeof value === "string") {
    return value;
  }
  return "";
};
