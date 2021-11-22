const router = require("express").Router();

const { getAllVideos, getSingleVideo, postVideo } = require("./controllers");

router.route("/videos").get(getAllVideos).post(postVideo);

router.route("/videos/:id").get(getSingleVideo);

module.exports = router;
