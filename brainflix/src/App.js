import "./Components/Variables/Variables.scss";
import "./app.scss";
import { Component } from "react";
import asideVideos from "./Assets/Data/videos.json";
import mainVideos from "./Assets/Data/video-details.json";
import Header from "./Components/Header/Header";
import MainVideoContainer from "./Components/Mainvideo/MainVideo";
import MainVideoComments from "./Components/MainComments/MainVideoComments";
import MainVideoItems from "./Components/MainVideoItems/MainVideoItems";
import AsideVideos from "./Components/AsideVideos/AsideVideos";
import { Route, Switch, Redirect } from "react-router-dom";

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
        <Switch>
          <Route path="/header" component={Header} />
        </Switch>
        <MainVideoContainer mainVideos={this.state.mainVideo} />
        <div className="comments__live-video">
          <div className="comments__aside">
            <MainVideoItems mainVideos={this.state.mainVideo} />
            <MainVideoComments videoComments={this.state.mainVideo} />
          </div>
          <AsideVideos
            asideVideos={this.state.asideVideos}
            handleChange={this.handleClick}
          />
        </div>
      </div>
      //  <div>cmainVideo={this.state.mainVideo}</div>;
      // console.log(this.state.mainVideo);
    );
  }
}
export default App;
