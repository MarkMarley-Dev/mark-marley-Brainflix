import React from "react";
import MainVideoItems from "../MainVideoItems/MainVideoItems";
import MainVideoComments from "../MainComments/MainVideoComments";

export default function MainVideoContainer(props) {
  return (
    <section>
      {props.mainVideos.map((mainVideos) => {
        return (
          <div>
            <MainVideoItems mainVideos={mainVideos} />
          </div>
        );
      })}
      {/* {mainVideos.forEach((data) => {
        data.value.forEach((valuesOjb) => {
          console.log(valuesOjb);
        });
        return (
          <div>
            <MainVideoComments mainVideos={mainVideos} />
            <MainVideoComments mainVideos={mainVideos.comments} />
          </div>
        );
      })} */}
    </section>
  );
}
