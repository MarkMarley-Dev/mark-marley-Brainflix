import React from "react";
import "../Variables/Variables.scss";
import "../AsideVideos/asidevideos.scss";
import uniqueId from "lodash/uniqueId";

export default function AsideVideos(props) {
  return (
    <section className="aside__container">
      <p className="aside__title"> NEXT VIDEOS</p>
      {props.asideVideos.map((asideVideo) => {
        // asideVideo.key = uniqueId;

        return (
          <div className="aside__items" key={asideVideo.id}>
            {/* <li> {asideVideo.key}</li> */}
            <div> </div>
            <img
              className="aside__videos"
              alt={asideVideo.title}
              src={asideVideo.image}
              onClick={() => props.handleChange(asideVideo.id)}
            />
            <div className="aside__video-info">
              <p className="aside__video-title">{asideVideo.title}</p>
              <p className="aside__video-channel">{asideVideo.channel}</p>
              <p className="aside__ids"> {asideVideo.id}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
