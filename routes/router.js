const express = require("express");
const route = express.Router();
const services = require("../controllers/videoRoutes");
const controller = require("../controllers/controller");

route.get("/", services.allVideos);
route.get("/add-video", services.addVideo);
route.get("/update-video", services.updateVideo);

// API

route.post("/api/video", controller.create);
route.get("/api/video", controller.find);
route.put("/api/video/:id", controller.update);
route.delete("/api/video/:id", controller.delete);

module.exports = route;
