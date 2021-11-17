import React from "react";
import commentSvg from "../../Assets/Icons/add_comment.svg";
import viewsLogo from "../../Assets/Icons/views.svg";
import likesLogo from "../../Assets/Icons/likes.svg";
import { Component } from "react";

import { singleVideoId, ApiFullVideoList, returnComments } from "../Utils/api";
// import { render } from "react-dom";
import AsideVideos from "../AsideVideos/AsideVideos";
import PageHeader from "../Header/Header";
import "./mainVideoItems.scss";
import "./mainVideo.scss";
export default class MainVideoItem extends Component {
  state = {
    mainVideo: null,
    comments: [],
    asideVideo: [],
  };
  componentDidMount() {
    let mainVideo = {};
    let asideVideo = [];

    ApiFullVideoList()
      .then((response) => {
        mainVideo = response.data[0];
        asideVideo = response.data.filter(
          (video) => video !== response.data[0]
        );
        console.log(response);
      })
      .then(() => {
        returnComments(mainVideo.id).then((response) => {
          console.log("comments test!!", response.data);
          this.setState({
            mainVideo: response.data,
            comments: response.data.comments,
            asideVideo: asideVideo,
          });
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    let videoId = this.props.match.params.videoId;
    console.log("comment update this props test", videoId);
    console.log(
      "comment update this prevprops test",
      prevProps.match.params.videoId
    );

    if (prevProps.match.params.videoId !== videoId) {
      singleVideoId(videoId).then((response) => {
        this.setState({
          mainVideo: response.data,
        });

        ApiFullVideoList().then((response) => {
          this.setState({
            asideVideo: response.data.filter((video) => video.id !== videoId),
          });
        });
        returnComments(videoId).then((response) => {
          console.log("comments test!!", response.data);
          this.setState({
            comments: response.data.comments,
          });
        });
      });
    }
  }
  render() {
    console.log(this.state.mainVideo);
    console.log(this.state.comments);
    if (!this.state.mainVideo) {
      return <main> Loading Video...</main>;
    }
    const { image, title, channel, timestamp, views, likes, description } =
      this.state.mainVideo;
    console.log(this.state.comments);
    console.log(this.state.mainVideo);
    return (
      <main>
        <header>
          <PageHeader />
        </header>
        <div>
          <video className="main__video" poster={image} alt={title} controls>
            {" "}
          </video>
        </div>
        <div className="main__content">
          <div className="main__video-info">
            <h1 className="main__title"> {title}</h1>
            <div className="main__video-stats-container">
              <span className="main__video-stats-one">
                <p className="main__channel"> By {channel} </p>
                <p className="main__timestamp">
                  {new Date(timestamp).toLocaleDateString("en-US")}
                </p>
              </span>
              <span className="main__video-stats-two">
                <div className="main__views-container">
                  <img
                    className="main__views-logo"
                    alt="Views Logo"
                    src={viewsLogo}
                  />
                  <p className="main__views">{views}</p>
                </div>
                <div className="main__likes-container">
                  <img
                    className="main__likes-logo"
                    alt="likes Logo"
                    src={likesLogo}
                  />
                  <p className="main__likes"> {likes}</p>
                </div>
              </span>
            </div>
            <p className="main__description"> {description} </p>
          </div>
        </div>

        <section className="comments__section">
          <p className="comments__number">
            {this.state.comments.length} Comments
          </p>

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
                    alt="Upload Logo"
                    src={commentSvg}
                  />
                  <div className="comments__add-txt-container">
                    <p className="comments__add-txt"> comment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.comments.map((comment) => {
            return (
              <div key={comment.id} className="comments__box">
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
        <aside>
          <AsideVideos videos={this.state.asideVideo} />
        </aside>
      </main>
    );
  }
}
