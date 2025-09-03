// core modules fs - filesystem , path , http , os ,

// fs -- read write delete append ......  // synchronous   // asynchronous

const fs = require("fs");

// async is better

// try {
//   fs.writeFileSync("file.txt", "this is new file.... ");
// } catch (error) {
//   console.log(error);
// }

// console.log("file written successfully");

// fs.appendFileSync("file.txt", "\n this is appended file ");
// fs.appendFile("file.txt", "this is appended file", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file appended successfully");
//   }
// });

// fs.writeFile("file.txt", "this is file written asynchronously", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("file written successfully");
//   }
// });
// console.log("js doesnot wait ");

// const data = fs.readFileSync("file.txt", "utf-8");
// console.log(data);

// fs.readFile("file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("file read successfully");
//     console.log(data);
//   }
// });
// try catch

// fs.unlinkSync("file.txt");

// if (fs.existsSync("file.txt")) {
//   fs.unlink("file.txt", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("file deleted successfully");
//     }
//   });
// } else {
//   console.log("no file to delelte");
// }

// path module
// fs.mkdir("day3", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder created successfully");
//   }
// });
