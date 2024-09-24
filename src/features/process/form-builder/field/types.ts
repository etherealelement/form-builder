import { FormValue } from "../form/types";

type FieldBase = {
  name: string;
  label: string;
  hideIf?: string;
};

export type TextFieldConfig = FieldBase & {
  type: "text";
};

export type SelectFieldConfig = FieldBase & {
  type: "select";
  options: { label: string; value: string }[];
  optionsUrl: string;
};

export type CheckboxFieldConfig = FieldBase & {
  type: "checkbox";
};

export type ComboboxFieldConfig = FieldBase & {
  type: "combobox";
};

export type ArrayFieldConfig = FieldBase & {
  type: "array";
  fields: FieldConfig[];
  newItemDefault?: FormValue;
};

export type FieldConfig =
  | TextFieldConfig
  | SelectFieldConfig
  | CheckboxFieldConfig
  | ComboboxFieldConfig
  | ArrayFieldConfig;

export type FieldValue = unknown;
export type OnChangeFieldValue = (value: unknown) => void;

export type FieldProps<T extends FieldConfig = FieldConfig> = {
  config: T;
  value: FieldValue;
  onChange: OnChangeFieldValue;
};
