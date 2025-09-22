const adminProfileController = (req, res) => {
  //   const param = req.params;
  //   console.log(param.username);

  // try {
  //   throw new Error();
  //   res.send("accessing profile of admin");
  // } catch (error) {
  //   if (error) {
  //     res.send("somehting went wrong");
  //   }
  // }

  try {
    throw new Error();
  } catch (errorAyo) {
    if (errorAyo) {
      res.status(500).send("internal server error");
    }
  }
};

module.exports = { adminProfileController };
