import "./Components/Variables/Variables.scss";
import "./app.scss";
import { Component } from "react";
import MainVideoItem from "./Components/Mainvideo/MainVideo";
import AsideVideos from "./Components/AsideVideos/AsideVideos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import { ApiUrl, ApiKey } from "../src/Components/Utils/api";
import { render } from "react-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainVideoItem}></Route>
        <Route
          path="/videos/:videoId"
          render={(routerProps) => {
            return <MainVideoItem {...routerProps} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// handleClick = (id) => {
//   const newVideo = mainVideos.find((video) => video.id === id);
//   console.log("The new video..", newVideo);
//   const newAsideVideos = asideVideos.filter((video) => video.id !== id);
//   this.setState({
//     mainVideo: newVideo,
//     asideVideos: newAsideVideos,
//   });
// };

//  <Route path="/home" component={MainVideoContainer}></Route>
//           {/* <Route */}
//         </Switch>
//         <Header />

//         <MainVideoContainer mainVideos={this.state.mainVideo} />
//         <div className="comments__live-video">
//           <div className="comments__aside">
//             <MainVideoItem mainVideos={this.state.mainVideo} />
//             <MainVideoComments videoComments={this.state.mainVideo} />
//           </div>
//           <AsideVideos
//             asideVideos={this.state.asideVideos}
//             handleChange={this.handleClick}
//           />
//         </div>
//       </div>
