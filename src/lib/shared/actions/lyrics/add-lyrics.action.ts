"use server";

import { TextEditorFormValues } from "@/widgets/text-editor/model/text-editor-form.schema";
import { db } from "../../config/db/db";
import { lyrics } from "../../config/db/schemas";

export const addLyrics = async (values: TextEditorFormValues) => {
  try {
    console.log("Submitting lyrics:", values);

    const result = await db
      .insert(lyrics)
      .values({
        title: values.title,
        content: values.content,
      })
      .returning();

    console.log("Inserted record:", result);
    
    alert("Lyrics saved successfully!");
  } catch (error) {
    console.error("Error saving lyrics:", error);
  }
};
