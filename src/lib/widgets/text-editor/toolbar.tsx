"use client";

import { Editor } from "@tiptap/react";
import { Toggle } from "@/shared/ui";
import { generateToolbarOptions } from "./model/options";
import { ToolbarOption } from "./model/toolbar-options.enum";

interface Props {
  editor: Editor | null;
}

export const Toolbar: React.FC<Props> = ({ editor }) => {
  if (!editor) return null;

  const { allowedOptions } = generateToolbarOptions(editor, [
    ToolbarOption.Bold,
    ToolbarOption.Italic,
    ToolbarOption.Strikethrough,
    ToolbarOption.AlignLeft,
    ToolbarOption.AlignRight,
    ToolbarOption.Highlight,
    ToolbarOption.Heading3,
  ]);

  return (
    <div className="border rounded-md p-1.5 mb-1 bg-slate-50 space-x-1 sticky  top-10 z-50">
      {allowedOptions.map((option, i) => (
        <Toggle
          key={i}
          size="sm"
          pressed={option.preesed}
          onPressedChange={option.onClick}
        >
          {option.icon}
        </Toggle>
      ))}
    </div>
  );
};
