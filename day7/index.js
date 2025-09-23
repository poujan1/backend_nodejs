// const express = require("express");

// const { connectDb } = require("./config/db.js");

// const { adminMiddleware } = require("./middlewares/admin.middleware.js");

// const User = require("./models/user.js");

// const {
//   adminProfileController,
// } = require("./controllers/admin.profile.controller.js");

// const { getAdminController } = require("./controllers/get.admin.controller.js");

// const {
//   adminPasswordController,
// } = require("./controllers/admin.password.controller.js");

// // const { homeController } = require("./controllers/home.controller");
// // const { contactController } = require("./controllers/contact.controller");

// const server = express();
// const PORT = 3333;

// connectDb()
//   .then(() => {
//     console.log("connected to database");
//     server.listen(PORT, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(`server is running successfully on port : ${PORT}`);
//       }
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // query parameters and path variables ---> through url
// // request body
// // request headers
// // form data

// // app level middleware
// // route level middleware
// // route handler or request handler

// // server.get(
// //   "/home",
// //   (req, res, next) => {
// //     next();
// //   },
// //   (req, res, next) => {
// //     next();
// //   },
// //   (req, res, next) => {
// //     next();
// //   }
// // );

// // server.post("/home", homeController);
// // server.get("/contact", contactController);

// // server.use("/admin", adminMiddleware);
// // server.get("/admin/profile/:username", adminProfileController);

// server.get("/admin/profile", adminProfileController);
// server.get("/admin/getAdmin", getAdminController);
// server.get("/admin/password", adminPasswordController);

// server.get("/user/profile", (req, res) => {
//   console.log("user profile");
//   res.send("Accessing user profile");
// });

// server.get("/user/getUser", (req, res) => {
//   console.log("get user");
//   res.send("Getting user information");
// });

// server.post("/insertData", async (req, res) => {
//   const obj = {
//     firstName: "Pujan",
//     lastName: "paneru",
//     username: "pujan123",
//     email: "ppoujan@gmail.com",
//   };

//   const user = new User(obj);

//   await user.save();

//   // mongoose method to save documents

//   res.send(`User inserted successfully`, user);
// });

// // server.use("/", (err, req, res, next) => {
// //   if (err) {
// //     res.status(500).send("Somthing went wrong");
// //   }
// // });
