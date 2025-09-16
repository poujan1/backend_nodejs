const adminMiddleware = (req, res, next) => {
  console.log("admin middleware called");
  const adminName = "priynka";
  if (adminName === "pujan") {
    next();
  } else {
    res.status(401).send("You are not authorized to access admin routes");
  }
};
module.exports = { adminMiddleware };
