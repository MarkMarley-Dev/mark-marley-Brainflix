// import React from "react";
// import "../Variables/Variables.scss";
// import "../MainVideoItems/MainVideoItems.scss";
// import viewsLogo from "../../Assets/Icons/views.svg";
// import likesLogo from "../../Assets/Icons/likes.svg";
// import ReactPlayer from "react-player";

// export default function MainVideoItems(props) {
//   return (
//     <div className="main__content">
//       <div className="main__video-info">
//         <h1 className="main__title"> {props.mainVideos.title}</h1>
//         <div className="main__video-stats-container">
//           <span className="main__video-stats-one">
//             <p className="main__channel"> By {props.mainVideos.channel} </p>
//             <p className="main__timestamp">
//               {new Date(props.mainVideos.timestamp).toLocaleDateString("en-US")}
//             </p>
//           </span>

//           <span className="main__video-stats-two">
//             <div className="main__views-container">
//               <img
//                 className="main__views-logo"
//                 alt="Views Image"
//                 src={viewsLogo}
//               />
//               <p className="main__views">{props.mainVideos.views}</p>
//             </div>
//             <div className="main__likes-container">
//               <img
//                 className="main__likes-logo"
//                 alt="likes Image"
//                 src={likesLogo}
//               />
//               <p className="main__likes"> {props.mainVideos.likes}</p>
//             </div>
//           </span>
//         </div>
//         <p className="main__description"> {props.mainVideos.description} </p>
//       </div>
//     </div>
//   );
// }
