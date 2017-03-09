import React from 'react';

const IndivVideo = (props) => {
  const video = props.video;
  if(!video){
    return(
      <div>Loading...</div>
    )
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="list-group-item">
      <div className="embed-container">
        <iframe src={url} allowFullScreen></iframe>
      </div>
      <div className="details">
        <h2 className="">{video.snippet.title}</h2>
        <h4>{video.snippet.description}</h4>
      </div>
    </div>
  )
};

export default IndivVideo;
