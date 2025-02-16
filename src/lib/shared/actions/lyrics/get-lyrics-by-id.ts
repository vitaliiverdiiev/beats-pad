"use server";

import { db, lyrics } from "@/shared/config";
import { eq } from "drizzle-orm"; // Import the 'eq' operator

export const getLyricsByID = async (id: string) => {
  try {
    const lyric = await db.select() // Select all columns for the lyric
      .from(lyrics)
      .where(eq(lyrics.id, id)) // Filter by ID using 'eq'
      .limit(1); // Limit to 1 result since ID should be unique

    if (lyric.length === 0) {
      return null; // Or undefined, or throw an error if you prefer
    }

    return lyric[0]; // Return the single lyric object

  } catch (error) {
    console.error("Error fetching lyrics:", error);
    return null; // Or throw the error if you want to handle it differently
  }
};