import { create } from "zustand";

interface LyricsState {
  versions: { id: number; content: string }[];
  addVersion: (content: string) => void;
  switchVersion: (id: number) => void;
}

export const useLyricsStore = create<LyricsState>((set) => ({
  versions: [{ id: 1, content: "<p>Start writing...</p>" }],
  addVersion: (content) =>
    set((state) => ({
      versions: [...state.versions, { id: state.versions.length + 1, content }],
    })),
  switchVersion: (id) =>
    set((state) => ({
      versions: state.versions.map((v) =>
        v.id === id ? { ...v, content: v.content } : v
      ),
    })),
}));
