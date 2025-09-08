// express
// express is node js framework for building web applications.
// http use garera server banayau ho?
// third party module
// http methods -- GET POST PUT DELETE PATCH
// version 1.0.0. --- > 12.11.1
// caret vs tilda ^ vs ~
// version change ---

const express = require("express");

const server = express();
server.get("/profile", (req, res) => {
  res.send("hello from server");
});

server.listen(1234, (err) => {
  if (err) {
    console.log("errror");
  } else {
    console.log("server is running on pot 1234");
  }
});
