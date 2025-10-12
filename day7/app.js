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

const {
  signupController,
  getUserController,
  updateUserController,
  deleteUserController,
  loginController,
} = require("./controllers/user.controller.js");

// const { adminPasswordController } = require("./controllers/admin.password.controller.js");
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

server.post("/signup", signupController);
server.post("/login", loginController);
server.get("/user", getUserController);
server.patch("/user", updateUserController);
server.delete("/user", deleteUserController);

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
