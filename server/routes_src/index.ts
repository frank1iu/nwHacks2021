import express = require("express");
import FirestoreAccess from "./Helpers/Firestore";
const router = express.Router();
const db = new FirestoreAccess(process.env.FIRESTORE_PROJECT, process.env.FIRESTORE_KEYFILE);

router.get("/welcome", function (req, res, next) {
  res.status(200).send({ welcomeMessage: "welcome" });
});

export = router;