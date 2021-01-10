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

router.get("/notification", async (req, res, next) => {
  try {
    const user = await db.login(req.body.username, req.body.password);
    const notifications = await db.getNotifications(req.body.username);
    res.status(200).send({success: true, notifications});
  } catch (_) {
    res.status(304).send({success: false});
  }
});

router.post("/notification", async (req, res, next) => {
  const success = await db.addNotification(req.body.username, req.body.content, req.body.type as any);
  res.status(200).send({success});
});

router.patch("/notification", async (req, res, next) => {
  const success = await db.markNotificationAsRead(req.body.notificationIds);
  res.status(200).send({success});
});

router.get("/conversations", async (req, res, next) => {
  try {
    // const user = await db.login(req.body.username, req.body.password);
    const conversations = await db.getConversations(req.body.username);
    res.status(200).send({success: true, conversations});
  } catch (_) {
    res.status(304).send({success: false});
  }
});

router.post("/conversations", async (req, res, next) => {
  const success = await db.createConversation(req.body.username1, req.body.username2);
  res.status(200).send({success});
});

router.post("/message", async (req, res, next) => {
  const success = await db.addMessage(req.body.username, req.body.conversationId, req.body.text);
  res.status(200).send({success});
});

export = router;
