import React from "react";

const Video = ({ video }) => {
  const { title, embedUrl, views, createdAt } = video;

  return (
    <div className="video">
      <h2>{title}</h2>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <p>Views: {views}</p>
      <p>Created at: {createdAt}</p>
    </div>
  );
};

export default Video;
