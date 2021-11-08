import React from "react";

// import MainVideoComments from "../MainComments/MainVideoComments";

export default function MainVideoContainer(props) {
  return (
    <section className="main__video-container">
      <video
        poster={props.mainVideos.image}
        className="main__video"
        controls
      ></video>
    </section>
  );
}
