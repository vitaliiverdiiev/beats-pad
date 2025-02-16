import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface LyricsContentProps {
  content: string;
}

export const LyricsMarkdown: React.FC<LyricsContentProps> = ({ content }) => {
  return (
    <div className="lyrics-content">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    </div>
  );
};
