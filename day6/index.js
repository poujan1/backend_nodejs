const express = require("express");

const server = express();

// localhost
// request handler
// req,res object
// order matters
// get post put patch delete
// use la chai sabai http methods lai match garne vayo

server.use("/home", (req, res) => {
  console.log("this is home get  route");
  res.send("this is get home route");
});

server.post("/home", (req, res) => {
  console.log("this is home post route");
  res.send("this is home post route");
});
// npm i nodemon -D
server.post("/home", (req, res) => {
  res.send("this is second home route");
});

server.post("/profile", (req, res) => {
  console.log("this is profile routes");
  res.send("profile created successfully");
});

server.get("/", (req, res) => {
  console.log("This is / route");
  res.send("this is / route");
});

server.listen(1234, (err) => {
  console.log("server is running on port 1234");
  if (err) {
    console.log(err);
  }
});
