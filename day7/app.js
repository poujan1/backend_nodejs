const express = require("express");
const cookie_parser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.routes.js");

const { connectDb } = require("./config/db.js");

const server = express();
server.use(express.json());
server.use(cookie_parser());
const PORT = 3333;

server.use("/auth", authRoutes);
server.use("/user", userRoutes);

connectDb()
  .then(() => {
    console.log("connected to database");
    server.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`server is running successfully on port : ${PORT}`);
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
