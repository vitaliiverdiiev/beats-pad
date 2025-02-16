import React from "react";
import DOMPurify from "dompurify";

interface LyricsContentProps {
  content: string;
}

export const LyricsContent: React.FC<LyricsContentProps> = ({ content }) => {
  // Sanitize the HTML content before rendering
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div
      className="lyrics-content"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};
