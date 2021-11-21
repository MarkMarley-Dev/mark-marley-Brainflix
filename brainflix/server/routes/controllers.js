const express = require("express");
const router = express.Router();
const fs = require("fs");
const uuidv4 = require("uuidv4");

const readData = () => {
  const fileData = fs.readFileSync("./data/videos.json");
  return JSON.parse(fileData);
};

function getAllVideos(_req, res) {
  try {
    const videoData = readData("../data/videos.json");
    if (!videoData) {
      res.status(404).json({ message: "No data has been found" });
    }
    return res.status(200).json(videoData);
  } catch (err) {
    return res
      .status(404)
      .json({ message: "No data Found", error: err.message });
  }
}

function getSingleVideo(req, res) {
  try {
    const videoToFind = req.params.id;
    const videoData = readData("../data/videos.json");
    const video = videoData.find(
      (el) => el.id.toLowerCase() === videoToFind.toLowerCase()
    );
    if (!video) {
      res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json(video);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "No data found", error: err.message });
  }
}

module.exports = {
  getAllVideos,
  getSingleVideo,
};
