const express = require("express");
const { homeController } = require("./controllers/home.controller");
const { contactController } = require("./controllers/contact.controller");

const server = express();
const PORT = 8000;

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

server.post("/home", homeController);
server.get("/contact", contactController);

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running successfully on port : ${PORT}`);
  }
});
