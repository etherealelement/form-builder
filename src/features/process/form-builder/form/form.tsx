import { FormConfig } from "./types";
import { Button } from "@/shared/ui/button";
import { Field } from "../field/field";
export const Form = ({ formConfig }: { formConfig: FormConfig }) => {
  return (
    <form>
      <div>
        {formConfig.fields.map((field, index) => {
          <Field key={index} field={field}></Field>;
        })}
      </div>
      <div>
        <Button type="submit">Submit</Button>
        <Button type="submit">Reset</Button>
      </div>
    </form>
  );
};
