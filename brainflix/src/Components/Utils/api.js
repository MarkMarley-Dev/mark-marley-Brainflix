import axios from "axios";

export const ApiUrl = "https://project-2-api.herokuapp.com";
export const ApiKey = "?api_key=3c22402f-6d53-4d9e-b9ae-ed047a738bbf";

export const singleVideoId = (id) => {
  return axios.get(`${ApiUrl}/videos/${id}/${ApiKey}`);
};
//project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=3c22402f-6d53-4d9e-b9ae-ed047a738bbf
// /videos/:id/comments
export const returnComments = (id) => {
  return axios.get(
    `https://project-2-api.herokuapp.com/videos/${id}/?api_key=3c22402f-6d53-4d9e-b9ae-ed047a738bbf`
  );
};

export const ApiFullVideoList = () => {
  return axios.get(`${ApiUrl}/videos/${ApiKey}`);
};
