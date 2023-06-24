import React from "react";

function CommentItem({ comment }) {
  return (
    <div>
      <p>{comment.user}</p>
      <p>{comment.comment}</p>
    </div>
  );
}

export default CommentItem;
