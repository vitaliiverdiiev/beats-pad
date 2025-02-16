"use client";

import { EditorContent } from "@tiptap/react";
import { TextEditorProps } from "./model/text-editor-ptops.type";
import { useTextEditor } from "./lib/use-text-editor";
import { Toolbar } from "./toolbar";

export const TextEditor: React.FC<TextEditorProps> = ({
  content,
  onChange,
}) => {
  const { editor } = useTextEditor({ content, onChange });

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
