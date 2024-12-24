import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Textarea } from "@/src/components/ui/textarea";
import { Select } from "@radix-ui/react-select";
import { UseFormReturn } from "react-hook-form";

interface FormProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
}
export function InputFormField({ form, name, label, placeholder }: FormProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={`${placeholder}...`} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function TextAreaForm({ form, name, label, placeholder }: FormProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={`${placeholder}`} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
export interface SelectInputProps extends FormProps {
  options: { value: string; label: string }[];
}

export function SelectFormInput({
  options,
  placeholder,
  form,
  label,
  name,
}: SelectInputProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((data, index) => {
                return (
                  <SelectItem key={index} value={data.value}>
                    {data.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function FileInputForm({ form, name, label }) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="application/pdf"
              onChange={(event) => {
                const file = event.target.files?.[0]; // Get the first selected file
                field.onChange(file); // Update React Hook Form state with the file
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
