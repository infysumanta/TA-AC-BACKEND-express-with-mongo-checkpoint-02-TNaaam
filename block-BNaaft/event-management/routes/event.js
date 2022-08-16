var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("events");
});
router.get("/new", function (req, res, next) {
  res.render("createEvent");
});

router.get("/:id", function (req, res, next) {
  res.render("singleEvent");
});

module.exports = router;
