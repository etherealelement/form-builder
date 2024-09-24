import { apply } from "json-logic-js";
import { Button } from "@/shared/ui/button";
import { Field } from "../field/field";
import { FormConfig, FormValue } from "./types";
import { useState } from "react";
import { FieldConfig, FieldValue } from "../field/types";

export function FormBuilder({
  formConfig,
  defaultValue,
  onChange,
}: {
  formConfig: FormConfig;
  defaultValue?: FormValue;
  onChange: (value: FormValue) => void;
}) {
  const [formState, setFormState] = useState<Partial<FormValue>>({});

  const getFieldValue = (name: string) =>
    formState[name] ?? defaultValue?.[name];

  const handleChangeField = (name: string) => (value: FieldValue) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleReset = () => {
    setFormState({});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onChange({ ...defaultValue, ...formState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        {formConfig.fields
          .filter((field) =>
            checkIsShown(field, { ...defaultValue, ...formState })
          )
          .map((field, index) => (
            <Field
              config={field}
              key={index}
              value={getFieldValue(field.name)}
              onChange={handleChangeField(field.name)}
            />
          ))}
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
}

function checkIsShown(field: FieldConfig, value: FormValue) {
  if (field.hideIf) {
    const isHidden = apply(JSON.parse(field.hideIf), value);
    return !isHidden;
  }

  return true;
}
