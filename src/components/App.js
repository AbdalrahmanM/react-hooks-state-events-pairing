import React, { useState } from "react";
import videoData from "../data/video";

function App() {
  const [upvotes, setUpvotes] = useState(videoData.upvotes);
  const [downvotes, setDownvotes] = useState(videoData.downvotes);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="App">
      <Video video={videoData} />

      <div className="actions">
        <button onClick={handleUpvote}>👍</button>
        <span>{upvotes}</span>
        <button onClick={handleDownvote}>👎</button>
        <span>{downvotes}</span>
        <button onClick={toggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>

      {showComments && (
        <div className="comments">
          <h3>Comments</h3>
          {videoData.comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.user}</p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
