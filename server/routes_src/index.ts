import express = require("express");
import FirestoreAccess from "./Helpers/Firestore";
const router = express.Router();
const db = new FirestoreAccess(process.env.FIRESTORE_PROJECT, process.env.FIRESTORE_KEYFILE);

router.get("/health", function (req, res, next) {
  res.status(200).send({ up: true });
});

router.post("/register", async (req, res, next) => {
  const username = req.params.username;
  const email = req.params.username;
  const type = req.params.type as any;
  const password = await db.registerUser(username, email, type);
  res.status(200).send({success: true, password: password});
});

export = router;