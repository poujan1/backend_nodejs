// http module
// aws
// url, uri , route or path
// http server
// === ==
// express
// MERN - Mongoose Expresss React Node

// Database --

// Database vs DBMS ??

// mySQL , postgresql. (SQL language)

// relational database vs nosql database (firestore)

// mongodb -- nosql

const http = require("http");
// req, res object
const server = http.createServer((req, res) => {
  if (req.url === "/something")
    if (req.url === "/profile") {
      const name = "swastika";
      res.end(`Hello ${name} your profile fetched successfully`);
    } else {
      res.end("hell0");
    }
});
// port

const port = 1123;
server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running on port ${port}`);
  }
});
