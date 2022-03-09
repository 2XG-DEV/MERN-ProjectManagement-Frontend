import React from "react";
import { Heading2 } from "../../Typography";
import Comment from "../Comment/Comment";
import "./CommentSection.css";

const CommentSection = ({ comments }) => {
  return (
    <div className="comment-section">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))
      ) : (
        <Heading2>No comments yet</Heading2>
      )}
    </div>
  );
};

export default CommentSection;
