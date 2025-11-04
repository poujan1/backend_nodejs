const express = require("express");
const { authMiddleware } = require("../middlewares/admin.middleware");

const {
  updateUserController,
  getUserController,
  deleteUserController,
  profileController,
  feedController,
} = require("../controllers/user.controller");

const router = express.Router();

// router.use(authMiddleware);

router.get("/profile", authMiddleware, profileController);
router.get("/feed", authMiddleware, feedController);
router.get("/", getUserController);
router.patch("/", updateUserController);
router.delete("/", deleteUserController);

module.exports = router;
