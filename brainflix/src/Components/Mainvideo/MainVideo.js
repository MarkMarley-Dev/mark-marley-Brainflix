import React from "react";
import MainVideoItems from "../MainVideoItems/MainVideoItems";
// import MainVideoComments from "../MainComments/MainVideoComments";

export default function MainVideoContainer(props) {
  console.log(props);
  return (
    <section>
      <div>
        <MainVideoItems mainVideos={props.mainVideos} />
      </div>
    </section>
  );
}
