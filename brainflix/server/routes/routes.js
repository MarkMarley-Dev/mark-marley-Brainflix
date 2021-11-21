const router = require("express").Router();

const { getAllVideos, getSingleVideo } = require("./controllers");

router.route("/videos").get(getAllVideos);

router.route("/videos/:id").get(getSingleVideo);

module.exports = router;
