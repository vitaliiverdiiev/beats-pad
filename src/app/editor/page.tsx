import { TextEditorForm } from "@/widgets/text-editor/text-editor-form";

export default function EditorPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lyrics Editor</h1>
      <TextEditorForm />
    </div>
  );
}
