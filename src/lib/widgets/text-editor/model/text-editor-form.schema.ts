import { z } from "zod";

export const textEdotorFormSchema = z.object({
  post: z.string().refine(
    (value) => {
      return extractTextFromHTML(value).trim().length >= 5;
    },
    {
      message: "The text must be at least 5 characters long after trimming",
    }
  ),
});

export type TextEditorFormValues = z.infer<typeof textEdotorFormSchema>;