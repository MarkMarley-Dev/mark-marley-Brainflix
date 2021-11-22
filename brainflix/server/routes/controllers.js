const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const uuid = require("uuid");

const readData = () => {
  const fileData = fs.readFileSync("./data/videos.json");
  return JSON.parse(fileData);
};

function getAllVideos(_req, res) {
  try {
    const videoData = readData();
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
    const videoData = readData();
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

function postVideo(req, res) {
  console.log("Post video request", req.body);
  try {
    const { title, description } = req.body;
    const videoData = readData("../data/videos.json");

    // const id = uuidv4();
    const newVideo = {
      title: title,
      description: description,
      channel: "Wild Bills Crazy Shootout",
      image:
        "https://crosscut.com/sites/default/files/styles/max_992x992/public/images/articles/2000.176.61.jpg?itok=1dx388Sw",
      views: "8080",
      likes: "3000",
      duration: "3:20",
      video:
        "https://www.youtube.com/watch?v=cm2vvGWvxgM&list=RDGMEMYH9CUrFO7CfLJpaD7UR85w&index=13",
      timestamp: Date.now(),
      id: uuid.v4(),
      comments: [],
    };
    videoData.push(newVideo);
    fs.writeFileSync("./data/videos.json", JSON.stringify(videoData));
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(500).json({ message: "No data found", error: err.message });
  }
}

module.exports = {
  getAllVideos,
  getSingleVideo,
  postVideo,
};
