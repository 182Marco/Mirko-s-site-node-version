exports.allVideos = (req, res) => {
  res.render("index", { msg: "I'm using node" });
};

exports.addVideo = (req, res) => {
  res.render("add-video");
};

exports.updateVideo = (req, res) => {
  res.render("update-video");
};
