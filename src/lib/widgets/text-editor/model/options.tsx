import { Editor } from "@tiptap/react";
import { ToolbarOption } from "./toolbar-options.enum";
import { Icon } from "@/shared/ui";

export const generateToolbarOptions = (
  editor: Editor,
  allowedLabels: ToolbarOption[]
) => {
  const addImage = () => {
    const url = window.prompt("URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const options = [
    {
      label: ToolbarOption.Heading1,
      icon: <Icon icon='heading-1' />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      preesed: editor.isActive("heading", { level: 1 }),
    },
    {
      label: ToolbarOption.Heading2,
      icon: <Icon icon='heading-2' />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      preesed: editor.isActive("heading", { level: 2 }),
    },
    {
      label: ToolbarOption.Heading3,
      icon: <Icon icon='heading-3' />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      preesed: editor.isActive("heading", { level: 3 }),
    },
    {
      label: ToolbarOption.Bold,
      icon: <Icon icon='bold' />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      preesed: editor.isActive("bold"),
    },
    {
      label: ToolbarOption.Italic,
      icon: <Icon icon='italic' />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      preesed: editor.isActive("italic"),
    },
    {
      label: ToolbarOption.Strikethrough,
      icon: <Icon icon='strikethrough' />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      preesed: editor.isActive("strike"),
    },
    {
      label: ToolbarOption.AlignLeft,
      icon: <Icon icon='align-left' />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      preesed: editor.isActive({ textAlign: "left" }),
    },
    {
      label: ToolbarOption.AlignCenter,
      icon: <Icon icon='align-center' />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      preesed: editor.isActive({ textAlign: "center" }),
    },
    {
      label: ToolbarOption.AlignRight,
      icon: <Icon icon='align-right' />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      preesed: editor.isActive({ textAlign: "right" }),
    },
    {
      label: ToolbarOption.BulletList,
      icon: <Icon icon='list' />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      preesed: editor.isActive("bulletList"),
    },
    {
      label: ToolbarOption.OrderedList,
      icon: <Icon icon='list-ordered' />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      preesed: editor.isActive("orderedList"),
    },
    {
      label: ToolbarOption.Code,
      icon: <Icon icon='code' />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      preesed: editor.isActive("code"),
    },
    {
      label: ToolbarOption.Highlight,
      icon: <Icon icon='highlighter' />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      preesed: editor.isActive("highlight"),
    },
    {
      label: ToolbarOption.Image,
      icon: <Icon icon='upload' />,
      onClick: () => addImage(),
      preesed: editor.isActive("image"),
    },
  ];

  return {
    options,
    allowedOptions: options.filter((option) =>
      allowedLabels.includes(option.label)
    ),
  };
};
