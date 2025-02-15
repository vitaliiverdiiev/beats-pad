"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextStyle from "@tiptap/extension-text-style";
import LyricsToolbar from "./lyrics-toolbar";
import { useState } from "react";

export default function LyricsEditor() {
  const [versions, setVersions] = useState<string[]>([]);
  const [currentVersion, setCurrentVersion] = useState<number>(-1);

  const editor = useEditor({
    extensions: [StarterKit, Highlight, TextStyle],
    content: "<p>Start writing your lyrics...</p>",
    autofocus: true,
  });

  if (!editor) return null;

  const saveVersion = () => {
    const content = editor.getHTML();
    setVersions([...versions, content]);
    setCurrentVersion(versions.length);
  };

  const loadVersion = (index: number) => {
    editor.commands.setContent(versions[index]);
    setCurrentVersion(index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <LyricsToolbar editor={editor} onSave={saveVersion} />
      <EditorContent editor={editor} className="border p-4 rounded min-h-[200px]" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Versions</h3>
        <div className="flex gap-2 mt-2">
          {versions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => loadVersion(idx)}
              className={`px-3 py-1 rounded ${
                currentVersion === idx ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Version {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
