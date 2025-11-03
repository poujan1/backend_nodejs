const express = require("express");

const {
  updateUserController,
  getUserController,
  deleteUserController,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getUserController);
router.patch("/", updateUserController);
router.delete("/", deleteUserController);

module.exports = router;
