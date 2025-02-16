"use client";

import { TextEditor } from "./text-editor";
import { Button } from "@/shared/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { useTextEditorForm } from "./lib/use-text-editor-form";

export const TextEditorForm = () => {
  const { form, onSubmit } = useTextEditorForm();

  return (
    <div className="max-w-3xl mx-auto py-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="post"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TextEditor
                    content={field.value}
                    onChange={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
