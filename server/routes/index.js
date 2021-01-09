const express = require("express");
const router = express.Router();

router.get("/welcome", function (req, res, next) {
  res.status(200).send({ welcomeMessage: "welcome" });
});

module.exports = router;
