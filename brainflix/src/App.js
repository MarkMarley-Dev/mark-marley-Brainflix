import "./App.css";
import "./Components/Variables/Variables.scss";
import { Component } from "react";
import asideVideos from "./Assets/Data/videos.json";
import mainVideos from "./Assets/Data/video-details.json";
import Header from "./Components/Header/Header";
import MainVideoContainer from "./Components/Mainvideo/MainVideo";

class App extends Component {
  state = {
    mainVideos: mainVideos,
    asideVideos: asideVideos,
  };
  render() {
    const mainVideos = this.state.mainVideos.filter((mainVideos) => {
      return mainVideos;
    });
    const asideVideos = this.state.asideVideos.filter((asideVideos) => {
      return asideVideos;
    });
    console.log("These are the main videos: ", mainVideos);
    console.log("These are the aside videos: ", asideVideos);

    return (
      <div>
        <Header />
        <MainVideoContainer mainVideos={mainVideos} />
      </div>
      //  <div>cmainVideo={this.state.mainVideo}</div>;
      // console.log(this.state.mainVideo);
    );
  }
}
export default App;
