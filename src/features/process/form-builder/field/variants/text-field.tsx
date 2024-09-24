import { Input } from "@/shared/ui/input";

import {
  FormItem,
  FormLabel,
  FormControl,
  // FormDescription,
  // FormMessage,
} from "@/shared/ui/form";
import { TextFieldConfig } from "../types";

export const TextField = ({ config }: { config: TextFieldConfig }) => {
  return (
    <FormItem>
      <FormLabel>{config.label}</FormLabel>
      <FormControl>
        <Input name={config.name}></Input>
      </FormControl>
      {/* <FormDescription></FormDescription>
      <FormMessage></FormMessage> */}
    </FormItem>
  );
};
