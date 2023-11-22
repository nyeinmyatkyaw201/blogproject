const db = require("../models/index");
const Blogs = db.blogs;

exports.create = (req, res) => {
  console.log(".>>>>>>>>");
  if (!req.body.title) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Blogs.create({
    title: req.body.title,
    content: req.body.content,
    published: req.body.published ? req.body.published : false,
  })
    .then((data) => {
      return res.status(201).send({
        status: "success",
        message: "Successfully created a post.",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        status: "fail",
        message: err.message,
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Blogs.findByPk(id)
    .then((data) => {
      if (data) {
        res.status(201).send({
          status: "success",
          data: data,
        });
      } else {
        res.status(404).send({
          status: "success",
          message: "NOT FOUND",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        status: "fail",
        message: err.message,
      });
    });
};

exports.findAll = (req, res) => {
  const blog = req.query;
  Blogs.findAll(blog)
    .then((data) => {
      res.status(201).send({
        status: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "fail",
        message: err.message,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Blogs.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      console.log(num);
      if (num == 1) {
        res.status(401).send({
          status: "success",
          message: "Blogs have updated successfully ",
        });
      } else {
        res.status(201).send({
          status: "fail",
          message: `Cannot update Tutorial with id=${id}. Maybe blog was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        status: "fail",
        message: err.message,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Blogs.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.deleteAll = (req, res) => {
  Blogs.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials.",
      });
    });
};
