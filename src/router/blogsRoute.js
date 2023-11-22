const express = require("express");

const blogCtrl = require("../controller/blogCtrl");

module.exports = (app) => {
  const Router = express.Router();

  Router.post("/", blogCtrl.create).get("/", blogCtrl.findAll).delete("/",blogCtrl.deleteAll);
  Router.get("/:id", blogCtrl.findOne).patch("/:id",blogCtrl.update).delete("/:id",blogCtrl.delete);
  app.use("/api/v1/blogs", Router);
};
