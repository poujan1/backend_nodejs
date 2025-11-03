const adminPasswordController = (req, res) => {
  console.log("admin passwrd");
  // const adminName = "pujan";
  // if (adminName === "pujan") {
  //   res.status(200).send("Accessing password of admin");
  // } else {
  //   res.status(401).send(" You are unauthorized to access this route");
  // }
  res.send("accessing password of admin");
};

module.exports = { adminPasswordController };
