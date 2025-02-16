"use client";

import useSWR from "swr";
import Link from "next/link";
import { getLyrics } from "@/shared/actions";
import { LyricsMarkdown } from "./lyrics-markdown";

const fetchLyrics = async () => {
  return await getLyrics();
};

export const LyricsList = () => {
  const { data: lyricsList, error, isLoading } = useSWR("lyrics", fetchLyrics);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading lyrics.</p>;

  return (
    <ul className="space-y-4">
      {lyricsList!.length > 0 ? (
        lyricsList!.map((lyric) => (
          <li key={lyric.id} className="border p-4 rounded-lg shadow-sm">
            <Link href={`/lyrics/${lyric.id}`}>
              <h2 className="font-semibold mb-4">{lyric.title}</h2>

              <LyricsMarkdown content={lyric.content} />

              <p className="text-sm text-gray-400 mt-5 text-right">
                {new Date(lyric.createdAt).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))
      ) : (
        <p>No lyrics found.</p>
      )}
    </ul>
  );
};
