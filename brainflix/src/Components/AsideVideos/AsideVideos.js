import "../Variables/Variables.scss";
import "../AsideVideos/asidevideos.scss";
import { NavLink } from "react-router-dom";

function AsideVideos({ videos }) {
  return (
    <aside>
      {videos.map((video) => (
        <NavLink key={video.id} to={`/videos/${video.id}`}>
          <div className="aside__items">
            <img
              className="aside__videos"
              alt={video.title}
              src={video.image}
            />
            <div className="aside__video-info">
              <p className="aside__video-title">{video.title}</p>
              <p className="aside__video-channel">{video.channel}</p>
              <p className="aside__ids"> {video.id}</p>
            </div>
          </div>
        </NavLink>
      ))}
    </aside>
  );
}

export default AsideVideos;
