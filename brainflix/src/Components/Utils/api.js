import axios from "axios";
export const ApiUrl = "https://project-2-api.herokuapp.com";
export const ApiKey = "?api_key=3c22402f-6d53-4d9e-b9ae-ed047a738bbf";

export const singleVideoId = (id) => {
  return axios.get(`http://localhost:8080/videos/${id}`);
};
//project-2-api.herokuapp.com/videos?api_key=3c22402f-6d53-4d9e-b9ae-ed047a738bbf
// /videos/:id/comments
export const returnComments = (id) => {
  return axios.get(`http://localhost:8080/videos/${id}`);
};

export const ApiFullVideoList = () => {
  return axios.get(`http://localhost:8080/videos`);
};
