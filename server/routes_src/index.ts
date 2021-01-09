import express = require("express");
import FirestoreAccess from "./Helpers/Firestore";
const router = express.Router();
const db = new FirestoreAccess(process.env.FIRESTORE_PROJECT, process.env.FIRESTORE_KEYFILE);

router.get("/health", function (req, res, next) {
  res.status(200).send({ up: true });
});

router.post("/register", async (req, res, next) => {
  const password = await db.registerUser(req.body.username, req.body.email, req.body.name, req.body.type as any);
  res.status(200).send({success: true, password: password});
});

export = router;