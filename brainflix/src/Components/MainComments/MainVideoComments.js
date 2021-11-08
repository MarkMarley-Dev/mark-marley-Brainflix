import React from "react";
import "../MainComments/MainVideoComments.scss";
import commentSvg from "../../Assets/Icons/add_comment.svg";
// import { Date } from "prismic-reactjs";

export default function MainVideoComments(props) {
  return (
    <section className="comments__section">
      <p className="comments__number">3 Comments</p>
      <div className="comments__container">
        <div className="comments__logo"></div>
        <div className="comments__add-comment">
          <p className="comments__title"> JOIN THE CONVERSATION</p>
          <div className="comments__add-inputs">
            <input
              className="comments__input"
              type="text"
              placeholder="Add a new comment"
            />
            <div className="comments__add-btn">
              <img
                className="comments__add-img"
                alt="Upload Image"
                src={commentSvg}
              />
              <div className="comments__add-txt-container">
                <p className="comments__add-txt"> comment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.videoComments.comments.map((comment) => {
        return (
          <div className="comments__box">
            <div className="comments__default-img"> </div>
            <div>
              <span className="comments__name-date">
                <p className="comments__name">{comment.name}</p>
                <p className="comments__timestamp">
                  {new Date(comment.timestamp).toLocaleDateString("en-US")}
                </p>
              </span>
              <p className="comments__description">{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
