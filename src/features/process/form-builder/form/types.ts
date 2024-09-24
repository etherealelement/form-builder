import { FieldConfig, FieldValue } from "../field/types";

export type FormConfig = {
  fields: FieldConfig[];
};

export type FormValue = Record<string, FieldValue | undefined>;
