// path module -- core module
const fs = require("fs");
const path = require("path");

// const dummyPath = "user/pujan/deskotp/file.txt";

// __dirname __filename

// console.log(path.basename(dummyPath));
// console.log(path.extname(dummyPath));

// console.log(__dirname);
// console.log(__filename);

// if (false) {
//   console.log("this statement is true");
// }

console.log(__dirname);
console.log(__filename);

const dir = path.join(__dirname, "files", "file.txt");

if (!fs.existsSync("files")) {
  fs.mkdir("files", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created successfully");
    }
  });
} else {
  console.log("file already exits");
}
// home work

console.time();
let num = "";
for (let i = 0; i < 10000; i++) {
  num += i + " \n";
}
fs.writeFileSync(dir, num.toString());
console.timeEnd();
