import React from "react";

// import MainVideoComments from "../MainComments/MainVideoComments";

export default function MainVideoContainer(props) {
  return (
    <section>
      <img
        className="main__video"
        alt={props.mainVideos.title}
        src={props.mainVideos.image}
        controls="controls"
        autoplay="false"
      />
    </section>
  );
}
