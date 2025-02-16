"use server";

import { db, lyrics } from "@/shared/config";

export const getLyrics = async () => {
  try {
    return await db.select().from(lyrics).orderBy(lyrics.createdAt);
  } catch (error) {
    console.error("Error fetching lyrics:", error);
    return [];
  }
};
