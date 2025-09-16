const adminProfileController = (req, res) => {
  //   const param = req.params;
  //   console.log(param.username);

  const query = req.query;
  console.log(query);
  console.log("admin profile");
  const adminName = "pujan";
  if (adminName === "pujan") {
    res.status(200).send("Accessing profile of admin");
  } else {
    res.status(401).send(" You are unauthorized to access this route");
  }
  res.send("accessing profile of admin");
};

module.exports = { adminProfileController };
