import React from "react";
import MainVideoItems from "../MainVideoItems/MainVideoItems";

export default function MainVideoContainer(props) {
  return (
    <section>
      {props.mainVideos.map((mainVideos) => {
        return <MainVideoItems mainVideos={mainVideos} />;
      })}
    </section>
  );
}
