import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import { ApiUrl, ApiKey, singleVideoId } from "../Utils/api";
import { render } from "react-dom";
import AsideVideos from "../AsideVideos/AsideVideos";
import PageHeader from "../Header/Header";
import "../MainVideoItems/MainVideoItems.scss";

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
    console.log(this.props);

    if (prevProps.match.params.videoId !== videoId) {
      singleVideoId(videoId).then((response) => {
        this.setState({
          mainVideo: response.data,
          asideVideo: this.state.asideVideo.filter(
            (video) => video !== response.data.id
          ),
        });
      });

      console.log(this.state.mainVideo);
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
        <aside>
          <AsideVideos videos={this.state.asideVideo} />
        </aside>
      </main>
    );
  }
}
// export default function MainVideoContainer(props) {
//   return (
//     <section className="main__video-container">
//       <video
//         poster={props.mainVideos.image}
//         className="main__video"
//         controls
//       ></video>
//     </section>
//   );
// }
