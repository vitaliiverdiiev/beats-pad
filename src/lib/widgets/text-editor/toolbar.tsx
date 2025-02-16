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
    <div className="mb-2 flex items-center gap-2">
      {allowedOptions.map((option, i) => (
        <Toggle
          key={i}
          size="sm"
          pressed={option.preesed}
          onPressedChange={option.onClick}
          variant='outline'
        >
          {option.icon}
        </Toggle>
      ))}
    </div>
  );
};
