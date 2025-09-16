const express = require("express");
const { adminMiddleware } = require("./middlewares/admin.middleware.js");
const {
  adminProfileController,
} = require("./controllers/admin.profile.controller.js");
const { getAdminController } = require("./controllers/get.admin.controller.js");
const {
  adminPasswordController,
} = require("./controllers/admin.password.controller.js");

// const { homeController } = require("./controllers/home.controller");
// const { contactController } = require("./controllers/contact.controller");

const server = express();
const PORT = 8000;

// app level middleware
// route level middleware
// route handler or request handler

// server.get(
//   "/home",
//   (req, res, next) => {
//     next();
//   },
//   (req, res, next) => {
//     next();
//   },
//   (req, res, next) => {
//     next();
//   }
// );

// server.post("/home", homeController);
// server.get("/contact", contactController);

server.use("/admin", adminMiddleware);
server.get("/admin/profile", adminProfileController);
server.get("/admin/getAdmin", getAdminController);
server.get("/admin/password", adminPasswordController);

server.get("/user/profile", (req, res) => {
  console.log("user profile");
  res.send("Accessing user profile");
});

server.get("/user/getUser", (req, res) => {
  console.log("get user");
  res.send("Getting user information");
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running successfully on port : ${PORT}`);
  }
});
