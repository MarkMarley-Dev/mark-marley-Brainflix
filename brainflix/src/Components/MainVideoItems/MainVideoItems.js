import React from "react";

export default function MainVideoItems(props) {
  return (
    <div className="main__content">
      <img alt={props.mainVideos.title} src={props.mainVideos.image} />
      <h1> {props.mainVideos.title}</h1>
      <span>
        <p> By {props.mainVideos.channel} </p>
        <p> {props.mainVideos.timestamp} </p>
      </span>
      <span>
        <p> {props.mainVideos.views}</p>
        <p> {props.mainVideos.likes}</p>
      </span>
      <p> {props.mainVideos.description} </p>
    </div>
  );
}
