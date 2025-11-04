const User = require("../models/user");
const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) => {
  console.log("admin middleware called");
  const adminName = "pujan";
  if (adminName === "pujan") {
    next();
  } else {
    res.status(401).send("You are not authorized to access admin routes");
  }
};

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized, No token provided",
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Something went wrong,${error} `,
    });
  }
};

module.exports = { adminMiddleware, authMiddleware };
