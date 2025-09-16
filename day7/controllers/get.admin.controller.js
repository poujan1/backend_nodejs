const getAdminController = (req, res) => {
  console.log("get admin");
  // const adminName = "pujan";
  // if (adminName === "pujan") {
  //   res.status(200).send("Accessing information of admin");
  // } else {
  //   res.status(401).send(" You are unauthorized to access this route");
  // }
  res.send("accessing information of admin");
};
module.exports = { getAdminController };
