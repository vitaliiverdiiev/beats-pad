"use client";

import { Editor } from "@tiptap/react";
import { Toggle } from "@/shared/ui";
import { generateToolbarOptions } from "./model/options";
import { AllowedOptions } from "./model/allowed-options";

interface Props {
  editor: Editor | null;
}

export const Toolbar: React.FC<Props> = ({ editor }) => {
  if (!editor) return null;

  const { allowedOptions } = generateToolbarOptions(editor, AllowedOptions);

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
