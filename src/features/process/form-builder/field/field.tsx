import { FieldProps } from "./types";
import { ArrayField } from "./variants/array-field";
import { TextField } from "./variants/text-field";

export function Field({ config, ...base }: FieldProps) {
  switch (config.type) {
    case "text":
      return <TextField {...base} config={config} />;
    case "array":
      return <ArrayField {...base} config={config} />;
  }
}
