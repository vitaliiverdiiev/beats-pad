import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TextEditorFormValues,
  textEdotorFormSchema,
} from "../model/text-editor-form.schema";

export const useTextEditorForm = () => {
  const form = useForm<TextEditorFormValues>({
    mode: "onTouched",
    resolver: zodResolver(textEdotorFormSchema),
    defaultValues: {
      post: "",
    },
  });

  const onSubmit: SubmitHandler<TextEditorFormValues> = (data) => {
    console.log(data);
  };

  return { form, onSubmit };
};
