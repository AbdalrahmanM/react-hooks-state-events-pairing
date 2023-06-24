import React from "react";
import CommentItem from "./CommentItem";

function CommentList({ comments }) {
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
