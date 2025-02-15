// LyricsToolbar.tsx
import { Editor } from "@tiptap/react";

interface ToolbarProps {
  editor: Editor | null;
  onSave: () => void;
}

export default function LyricsToolbar({ editor, onSave }: ToolbarProps) {
  if (!editor) return null;

  return (
    <div className="flex gap-2 mb-4 p-2 border-b">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("bold") ? "bg-gray-900 text-white" : "bg-gray-200"
        }`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("italic") ? "bg-gray-900 text-white" : "bg-gray-200"
        }`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        disabled={!editor.can().chain().focus().toggleHighlight().run()}
        className={`px-3 py-1 rounded ${
          editor.isActive("highlight") ? "bg-yellow-400" : "bg-gray-200"
        }`}
      >
        Highlight
      </button>
      <button
        onClick={onSave}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        Save Version
      </button>
    </div>
  );
}
