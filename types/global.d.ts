import { CreateGuardrailsSchema } from "@/src/lib/zod";

export type funcResponse =
  | {
      data: any;
      message: string;
      status: number;
    }
  | { data: null; error?: boolean; message?: string; status: number };

export type User = {
  id: string;
  email: string;
  fullname?: string;
};

export type GuardrailsType = {
  name: string;
  rules: string;
  pdfImage: File | undefined;
  compliancetype: ComplianceType;
  prioritylevel: PriorityLevel;
  rulestype: RulesType;
};
export interface userD {
  userId: string;
  email: string;
}

export interface fileData {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}
