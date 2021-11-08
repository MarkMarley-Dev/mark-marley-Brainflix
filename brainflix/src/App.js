import "./App.css";
import "./Components/Variables/Variables.scss";
import "./app.scss";
import { Component } from "react";
import asideVideos from "./Assets/Data/videos.json";
import mainVideos from "./Assets/Data/video-details.json";
import Header from "./Components/Header/Header";
import MainVideoContainer from "./Components/Mainvideo/MainVideo";
import MainVideoComments from "./Components/MainComments/MainVideoComments";
import AsideVideos from "./Components/AsideVideos/AsideVideos";

class App extends Component {
  state = {
    mainVideo: mainVideos[0],
    asideVideos: asideVideos.filter((video) => video.id !== asideVideos[0].id),
  };

  handleClick = (id) => {
    const newVideo = mainVideos.find((video) => video.id === id);
    console.log("The new video..", newVideo);
    const newAsideVideos = asideVideos.filter((video) => video.id !== id);
    this.setState({
      mainVideo: newVideo,
      asideVideos: newAsideVideos,
    });
  };

  render() {
    console.log("These are the main videos: ", mainVideos);
    console.log("These are the aside videos: ", asideVideos);

    return (
      <div>
        <Header />
        {/* <div className="comments__aside"> */}
        <MainVideoContainer mainVideos={this.state.mainVideo} />

        <MainVideoComments videoComments={this.state.mainVideo} />
        <AsideVideos
          asideVideos={this.state.asideVideos}
          handleChange={this.handleClick}
        />
        {/* </div> */}
      </div>
      //  <div>cmainVideo={this.state.mainVideo}</div>;
      // console.log(this.state.mainVideo);
    );
  }
}
export default App;
