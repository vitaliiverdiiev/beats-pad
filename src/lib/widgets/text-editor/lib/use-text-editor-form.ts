import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextEditorFormValues,
  textEditorFormSchema,
} from "../model/text-editor-form.schema";
import { addLyrics } from "@/shared/actions/lyrics/add-lyrics.action";

export const useTextEditorForm = () => {
  const form = useForm<TextEditorFormValues>({
    mode: "onTouched",
    resolver: zodResolver(textEditorFormSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<TextEditorFormValues> = async (values) => {
    await addLyrics(values);
  };

  return { form, onSubmit };
};
