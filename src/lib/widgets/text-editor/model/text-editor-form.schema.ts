import { z } from "zod";

export const textEditorFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  content: z.string().min(10, "Lyrics must be at least 10 characters"),
});

export type TextEditorFormValues = z.infer<typeof textEditorFormSchema>;
