import React from "react";

export default function MainVideoComments(props) {
  return (
    <section className="comments__section">
      <p>3 Comments</p>
      <div className="header__img"></div>
      <input
        className="comments__input"
        type="submit"
        placeholder="Add a new comment"
      />
      <button type="submit" class="header__upload-btn"></button>
      <div className="comments__box">
        <div className="comments__img"> </div>

        <p>{props.mainVideos.comments.name}</p>
      </div>
    </section>
  );
}
