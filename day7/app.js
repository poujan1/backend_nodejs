const express = require("express");
const User = require("./models/user.js");

// schema , models ,mongoose ,object destructuring,simple mongoose methods for create read update delete , why express.json()?

// http methods

// what are the diffrent ways client could send data to server? query path body....

// what is happening behind the scenes whenn we are sending create request to the server after connecting to the database?

// user create garne , user get garne , user update garne ,user delete garne

// mongoose documentation (schema methods )

// yo jun hamle route hanlder banayem,yslai controller ma shift garne ra code lai modular banauna khojne ani try catch use garne
//

const { connectDb } = require("./config/db.js");
// json vs jsObject
const server = express();
server.use(express.json());
const PORT = 3333;

// server.post("/user", async (req, res) => {
//   const { firstName, lastName, username, email } = req.body;

//   try {
//     const user = new User({
//       firstName: firstName,
//       lastName: lastName,
//       username: username,
//       email: email,
//     });

//     await user.save();
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//       error: error,
//     });
//   }

//   res.status(201).json({
//     success: true,
//     message: "User saved successfully",
//     data: user,
//   });
// });

// server.get("/user", (req, res) => {});

server.post("/user", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = new User({
      username: username,
      password: password,
      email: email,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
});

server.get("/user", async (req, res) => {
  //read
  try {
    const users = await User.find({ username: "ridikshya" });
    res.status(200).json({
      success: true,
      message: "user fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
  await User.find({});
});

server.patch("/user", async (req, res) => {
  // update
  const { filter, nameToChange } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { username: filter },
      { username: nameToChange }
    );
    res.status(200).json({
      success: true,
      message: "user updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
});

server.delete("/user", (req, res) => {
  // delete
});

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

// server.use("/", (err, req, res, next) => {
//   // if some route is not found you should be sending response route not found
// });
