import { Button, Icon } from "@/shared/ui";
import { LyricsList } from "@/widgets/lyrics-list/ui/lyrics-list";
import Link from "next/link";

export const LyricsPage = () => {
  // const lyricsList = await getLyrics(); // ✅ Server Action runs only on the server

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center gap-4">
        <h2>Lyrics Page List</h2>
        <Button variant="outline" size="icon" asChild>
          <Link href="/lyrics/add">
            <Icon icon="plus" />
          </Link>
        </Button>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Lyrics</h1>

        <LyricsList />


        {/* {lyricsList.length > 0 ? (
          <ul className="mt-10 space-y-3">
            {lyricsList.map((lyric) => (
              <li key={lyric.id} className="border p-4 rounded-lg shadow-sm">
                <h2 className="font-semibold">{lyric.title}</h2>
                <p className="text-gray-600">{lyric.content}</p>
                <p className="text-sm text-gray-400 mt-10">
                  {new Date(lyric.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No lyrics found.</p>
        )} */}
      </div>
    </div>
  );
};
