import { TextFieldConfig } from "./types";
import { TextField } from "./variants/text-field";

const fieldMap: {
  [key: string]: (field: TextFieldConfig) => JSX.Element;
} = {
  text: (field: TextFieldConfig) => <TextField config={field}></TextField>,
};

export const Field = ({ field }: { field: TextFieldConfig }) => {
  return fieldMap[field.type](field);
};
