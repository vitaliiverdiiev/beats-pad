import { text, pgTable, uuid, timestamp } from "drizzle-orm/pg-core";

export const lyrics = pgTable("lyrics", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
