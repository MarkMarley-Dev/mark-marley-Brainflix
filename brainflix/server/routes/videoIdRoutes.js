// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// const uuidv4 = require("uuidv4");
// // const { singleVideoId } = require("../../src/Components/Utils/api");

// function readData(path) {
//   return JSON.parse(fs.readFileSync(path));
// }

// function getSingleVideo(req, res) {
//   try {
//     const videoToFind = req.params.id;
//     const videoData = readData("./data/videos.json");
//     const video = videoData.find(
//       (el) => el.id.toLowerCase() === videoToFind.toLowerCase()
//     );
//     if (!video) {
//       res.status(404).json({ message: "Video not found" });
//     }
//     return res.status(200).json(video);
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "No data found", error: err.message });
//   }
// }

// router.route("/video/:id").get(getSingleVideo);

// module.exports = router;
