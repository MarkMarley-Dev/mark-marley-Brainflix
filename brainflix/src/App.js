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
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import { ApiUrl, ApiKey } from "../src/Components/Utils/api";

class App extends Component {
  state = {
    mainVideo: mainVideos[0],
    asideVideos: asideVideos.filter((video) => video.id !== asideVideos[0].id),
  };

  getVideoData = axios.get(`${ApiUrl}/videos${ApiKey}`).then((response) => {
    return console.log("This is response data", response.data);
  });

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
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/home" component={MainVideoContainer}></Route>
            {/* <Route */}
          </Switch>
          <Header />

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
      </BrowserRouter>
    );
  }
}
export default App;
