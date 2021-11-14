import React from "react";
import commentSvg from "../../Assets/Icons/add_comment.svg";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import { ApiUrl, ApiKey, singleVideoId } from "../Utils/api";
// import { render } from "react-dom";
import AsideVideos from "../AsideVideos/AsideVideos";
import PageHeader from "../Header/Header";
import "../MainVideoItems/mainVideoItems.scss";
import "./mainVideo.scss";
export default class MainVideoItem extends Component {
  state = {
    mainVideo: null,
    asideVideo: [],
  };
  componentDidMount() {
    const { videoId } = this.props.match.params;
    if (videoId) {
      singleVideoId(videoId).then((response) => {
        this.setState({
          mainVideo: response.data,
          asideVideo: this.state.asideVideo.filter(
            (video) => video !== response.data.id
          ),
        });
        console.log(response);
      });
    }
    axios.get(`${ApiUrl}/videos/${ApiKey}`).then((response) =>
      this.setState({
        mainVideo: response.data[0],
        asideVideo: response.data.filter((video) => video !== response.data[0]),
      })
    );
  }

  componentDidUpdate(prevProps) {
    const { videoId } = this.props.match.params;
    console.log(prevProps);
    console.log(videoId);

    if (prevProps.match.params.videoId !== videoId) {
      singleVideoId(videoId).then((response) => {
        console.log(response.data);
        this.setState({
          mainVideo: response.data,
          asideVideo: this.state.asideVideo.filter(
            (video) => video.id !== response.data.id
          ),
        });
      });
    }
  }
  render() {
    console.log(this.state.mainVideo);
    if (!this.state.mainVideo) {
      return <main> Loading Video...</main>;
    }
    const { image, title, channel, timestamp, views, likes, description } =
      this.state.mainVideo;

    return (
      <main>
        <header>
          <PageHeader />
        </header>
        <div>
          <img className="main__video" src={image} alt={title} />
        </div>
        <h1>{title}</h1>
        <div>
          {channel} {timestamp}
          {views} {likes}
        </div>
        {description}
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
          {/* {this.state.videoId.comments.map((comment) => {
            return ( */}
          {/* <div className="comments__box">
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
          </div> */}
          );
          {/* })} */}
        </section>

        <aside>
          <AsideVideos videos={this.state.asideVideo} />
        </aside>
      </main>
    );
  }
}

// componentDidUpdate(prevProps) {
//   const { videoId } = this.props.match.params;
//   console.log(videoId);
//   console.log(prevProps);
//   // if (prevProps.match.params !== videoId) {
//   //   singleVideoId(videoId).then((response) => {
//   //     this.setState({
//   //       mainVideo: response.data,
//   //       asideVideo: this.state.asideVideo.filter((video) => {
//   //         video !== response.data.id;
//   //       }),
//   //     });
//   //   });
//   // }
//   // if (prevProps.match.params.video)
//   if (prevProps.match.params.videoId !== videoId) {
//     singleVideoId(videoId).then((response) => {
//       this.setState({
//         mainVideo: response.data,
//         asideVideo: this.state.asideVideo.filter(
//           (video) => video !== response.data.id
//         ),
//       });
//     });
//   }
// }
