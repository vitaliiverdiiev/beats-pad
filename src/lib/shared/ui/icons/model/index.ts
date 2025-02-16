import {
  Heading1,
  Heading2,
  Heading3,
  Code,
  Bold,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  AlignCenter,
  AlignLeft,
  AlignRight,
  Highlighter,
  Upload,
} from "lucide-react";

export const ICON_MAP = {
  "heading-1": Heading1,
  "heading-2": Heading2,
  "heading-3": Heading3,
  code: Code,
  bold: Bold,
  italic: Italic,
  list: List,
  "list-ordered": ListOrdered,
  strikethrough: Strikethrough,
  "align-center": AlignCenter,
  "align-left": AlignLeft,
  "align-right": AlignRight,
  highlighter: Highlighter,
  upload: Upload,
} as const;

export type IIconName = keyof typeof ICON_MAP;
