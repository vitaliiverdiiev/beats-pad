import { getLyricsByID } from "@/shared/actions";
import { LyricsMarkdown } from "@/widgets/lyrics-list/ui/lyrics-markdown";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const lyrics = await getLyricsByID(id);

  if (!lyrics) {
    return <div>Lyrics not found</div>;
  }

  return (
    <div className="container py-4">
      <div>My id is: {id}</div>

      <div className="mt-10">
        <h1 className="mb-4">{lyrics.title}</h1>
        <LyricsMarkdown content={lyrics.content} />
      </div>
    </div>
  );
}
