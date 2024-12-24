import { z } from "zod";

export const CreateGuardrailsSchema = z.object({
  name: z.string().min(2, { message: "Title must be at least 2 characters." }),
  rules: z
    .string()
    .min(20, { message: "Description at least 20 characters long" }),

  rulefile: z.custom<File | undefined>(
    (file) =>
      file === undefined ||
      (file instanceof File &&
        file.size <= 5 * 1024 * 1024 &&
        file.type === "application/pdf"),
    {
      message: "Resume must be a PDF file less than 5MB.",
    },
  ),
});
