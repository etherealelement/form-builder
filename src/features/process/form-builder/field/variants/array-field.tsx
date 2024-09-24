import {
  ArrayFieldConfig,
  FieldConfig,
  FieldProps,
  FieldValue,
} from "../types";
import { BaseLabel } from "../filed-base";
import { useId } from "react";
import { Button } from "@/shared/ui/button";

import { DeleteIcon } from "lucide-react";
import { Field } from "../field";
import { FormValue } from "../../form/types";

export function ArrayField({
  config,
  value,
  onChange,
}: FieldProps<ArrayFieldConfig>) {
  const id = useId();

  const arrayItems = parseValue(value);

  const handleAddClick = () => {
    const newItem = config.newItemDefault ?? {};
    onChange([...arrayItems, newItem]);
  };

  const handleRemoveClick = (index: number) => () => {
    const newItems = [...arrayItems];
    newItems.splice(index, 1);
    onChange(newItems);
  };

  const handleChangeField = (index: number) => (newValue: FormValue) =>
    onChange(arrayItems.map((item, i) => (i === index ? newValue : item)));

  return (
    <>
      <BaseLabel id={id}>{config.label}</BaseLabel>
      <div className="flex flex-col gap-4 border-b-2 border-gray-300 pl-4">
        {arrayItems.map((fieldValue, index) => (
          <ArrayItem
            key={index}
            fields={config.fields}
            value={fieldValue}
            onRemove={handleRemoveClick(index)}
            onChange={handleChangeField(index)}
          />
        ))}
        <Button type="button" onClick={handleAddClick}>
          Add
        </Button>
      </div>
    </>
  );
}

function ArrayItem({
  fields,
  onRemove,
  value,
  onChange,
}: {
  fields: FieldConfig[];
  onRemove: () => void;
  value: FormValue;
  onChange: (value: FormValue) => void;
}) {
  const getFieldValue = (name: string) => value[name];

  const handleChangeField = (name: string) => (newValue: FieldValue) =>
    onChange({ ...value, [name]: newValue });

  return (
    <div className="flex gap-2">
      <div className="flex grow">
        {fields.map((field, index) => (
          <Field
            config={field}
            key={index}
            value={getFieldValue(field.name)}
            onChange={handleChangeField(field.name)}
          />
        ))}
      </div>
      <Button variant="ghost" type="button" onClick={onRemove}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

const parseValue = (value: FieldValue): FormValue[] => {
  if (Array.isArray(value) && value.every(isObject)) {
    return value;
  }
  return [];
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;
