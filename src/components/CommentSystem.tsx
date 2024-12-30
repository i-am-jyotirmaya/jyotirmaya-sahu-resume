import { Comment } from "@/types/comment";
import { useState } from "react";

interface Props {
  sectionId: string;
  onComment: (comment: Omit<Comment, "id">) => void;
}

export const CommentSystem = ({ sectionId, onComment }: Props) => {
  const [selection, setSelection] = useState<string>("");

  const handleTextSelection = () => {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      setSelection(selectedText);
    }
  };

  const handleComment = (commentText: string) => {
    const newComment = {
      selectedText: selection,
      comment: commentText,
      timestamp: new Date(),
      section: sectionId,
      position: {
        start: 0, // Calculate actual position
        end: 0,
      },
      metadata: {
        userAgent: navigator.userAgent,
        ipAddress: "", // Get from API
      },
    };
    onComment(newComment);
  };

  return (
    <div onMouseUp={handleTextSelection}>
      {selection && (
        <div className="fixed bg-white shadow-lg p-4 rounded">
          <textarea placeholder="Add your comment..." />
          <button onClick={() => handleComment("Comment text")}>Submit</button>
        </div>
      )}
    </div>
  );
};
