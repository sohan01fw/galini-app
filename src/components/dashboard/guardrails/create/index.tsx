"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FileInputForm,
  InputFormField,
  SelectFormInput,
  TextAreaForm,
} from "@/src/components/sharedui/ui";

import { Button } from "@/src/components/ui/button";
import { CreateGuardrailsSchema } from "@/src/lib/zod";
import {
  ComplianceTypeArr,
  PriorityTypeArr,
  RulesTypeArr,
} from "@/src/lib/data";
import { CreateGuardrailsRule } from "@/src/lib/Action/Guardrails.action";
import { GuardrailsType, userD } from "@/types/global";
export function CreateGuardrails({ userData }: { userData: userD }) {
  const form = useForm<z.infer<typeof CreateGuardrailsSchema>>({
    resolver: zodResolver(CreateGuardrailsSchema),
    defaultValues: {
      name: "",
      rules: "",
      pdfImage: undefined,
      compliancetype: undefined,
      prioritylevel: "LOW",
      rulestype: "GENERALCONSTRAINTS",
    },
  });

  async function onSubmit(values: z.infer<typeof CreateGuardrailsSchema>) {
    const createGuardrails = await CreateGuardrailsRule(
      values as GuardrailsType,
      userData.email as string,
      userData.userId as string,
    );
    if ("error" in createGuardrails) {
      console.log(createGuardrails.message);
    }
    console.log(createGuardrails.message);
  }
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <InputFormField
          form={form}
          label="name"
          name="name"
          placeholder="write your guardrails name..."
        />
        <TextAreaForm
          form={form}
          label="rules"
          name="rules"
          placeholder="Describe the rules..."
        />
        <FileInputForm form={form} label="Upload Rule file" name="pdfImage" />
        <SelectFormInput
          options={ComplianceTypeArr}
          placeholder="Select your compliance type"
          form={form}
          label="Compliance Type"
          name="compliancetype"
        />
        <SelectFormInput
          options={PriorityTypeArr}
          placeholder="Select priority level"
          form={form}
          label="priority"
          name="priority"
        />
        <SelectFormInput
          options={RulesTypeArr}
          placeholder="Select a rules"
          form={form}
          label="rules type"
          name="rulestype"
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
