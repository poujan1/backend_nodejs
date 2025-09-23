const express = require("express");

// schema , models ,mongoose ,object destructuring,simple mongoose methods for create read update delete , why express.json()?

// http methods

// what are the diffrent ways client could send data to server? query path body....

// what is happening behind the scenes whenn we are sending create request to the server after connecting to the database?

// user create garne , user get garne , user update garne ,user delete garne

// mongoose documentation (schema methods )
const { connectDb } = require("./config/db.js");
const User = require("./models/user.js");

const server = express();

server.use(express.json());

const PORT = 3333;

server.post("/user", async (req, res) => {
  const { firstName, lastName, username, email } = req.body;
  const user = new User({
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
  });

  await user.save();

  res.status(201).json({
    success: true,
    message: "User saved successfully",
    data: user,
  });
});

server.get("/user", (req, res) => {});

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
