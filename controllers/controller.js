const VideoDb = require("../models/model");
//
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    VideoDb.findById(id)
      .then(data => {
        if (!data) {
          res.status(404).send({ message: `video with id: ${id} not found` });
        } else {
          res.send(data);
        }
      })
      .catch(er =>
        res.status(500).send({
          message: `internal server error in retriving the video: ${er}`,
        })
      );
  } else {
    VideoDb.find()
      .then(user => res.send(user))
      .catch(er =>
        console.log(res.status(500).send(`user not found, error: ${er}`))
      );
  }
};
//
exports.create = (req, res) => {
  // validate
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }
  const video = new VideoDb({
    name: req.body.name,
    url: req.body.url,
    description: req.body.description,
  });

  video
    .save(video)
    .then(data => res.send({ message: data }))
    .catch(er => `the record coulden't be saved, error: ${er}`);
};
//
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }
  const id = req.params.id;
  const data = await VideoDb.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
    new: true,
  });
  try {
    data
      ? res.send(data)
      : res
          .status(400)
          .send({ message: `can't update user ${id}. Maybe user not found` });
  } catch (er) {
    console.log(`error occurred in put request: ${er}`);
  }
};
//
exports.delete = (req, res) => {
  const id = req.params.id;
  VideoDb.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `can't delete with id: ${id}, maybe id it's wrong`,
        });
      } else {
        res.send(`DELETED: ${data}`);
      }
    })
    .catch(er =>
      res
        .status(500)
        .send(`delete operation of ${id} impossibile, error: ${er}`)
    );
};
