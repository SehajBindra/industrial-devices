"use client";

import type { Control, FieldPath, FieldValues } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type LeadContactFormFieldsProps<T extends FieldValues> = {
  control: Control<T>;
};

export function LeadContactFormFields<T extends FieldValues>({
  control,
}: LeadContactFormFieldsProps<T>) {
  const fields: Array<{
    name: FieldPath<T>;
    label: string;
    type?: string;
    autoComplete?: string;
  }> = [
    { name: "name" as FieldPath<T>, label: "Name", autoComplete: "name" },
    {
      name: "company" as FieldPath<T>,
      label: "Company name",
      autoComplete: "organization",
    },
    {
      name: "email" as FieldPath<T>,
      label: "Email",
      type: "email",
      autoComplete: "email",
    },
    {
      name: "phone" as FieldPath<T>,
      label: "Number",
      type: "tel",
      autoComplete: "tel",
    },
  ];

  return (
    <>
      {fields.map((field) => (
        <FormField
          key={field.name}
          control={control}
          name={field.name}
          render={({ field: formField }) => (
            <FormItem>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                <Input
                  type={field.type}
                  autoComplete={field.autoComplete}
                  className="h-11 rounded-xl bg-white"
                  {...formField}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );
}
