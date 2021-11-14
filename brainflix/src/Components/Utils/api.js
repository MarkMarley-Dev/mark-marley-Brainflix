import axios from "axios";

export const ApiUrl = "https://project-2-api.herokuapp.com";
export const ApiKey = "?api_key=3c22402f-6d53-4d9e-b9ae-ed047a738bbf";

export const singleVideoId = (id) => {
  return axios.get(`${ApiUrl}/videos/${id}${ApiKey}`);
};

export const ApiFullVideoList =
  "https://project-2-api.herokuapp.com/videos/:id/?api_key=3c22402f-6d53-4d9e-b9ae-ed047a738bbf";
// export const ApiRegisterKey = () => {
//   axios.get(`${ApiUrl}/register`).then((response) => {
//     return console.log(response.data);
//   });
// };
