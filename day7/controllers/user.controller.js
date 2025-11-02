const bcrypt = require("bcrypt");
const User = require("../models/user");

const signupController = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "body is required",
    });
  }
  const { username, password, email } = req?.body;

  const passowrdRegx =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!username || !password || !email) {
    return res.status(400).json({
      success: false,
      message: "username or password or email is required",
    });
  }
  if (!passowrdRegx.test(password)) {
    return res.status(400).json({
      success: false,
      message: "password should be 8 characters should be uppercase....",
    });
  }

  if (!emailRegx.test(email)) {
    return res.status(400).json({
      success: false,
      message: "email format is incorrect",
    });
  }

  try {
    const SALT_ROUNDS = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

const getUserController = async (req, res) => {
  //read
  try {
    const users = await User.find({ username: "ridikshya" });

    if (!users) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "user fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

const updateUserController = async (req, res) => {
  // update
  const { filter, nameToChange } = req.body;

  // if (nameToChange.length >= 50) {
  //   // code here
  // }
  try {
    const user = await User.findOneAndUpdate(
      { username: filter },
      { username: nameToChange }
    );
    res.status(200).json({
      success: true,
      message: "user updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

const deleteUserController = async (req, res) => {
  // delete
  const { username } = req.body;
  try {
    await User.findOneAndDelete({ username: username });
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

const loginController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed. User not found.",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed. Incorrect password.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

module.exports = {
  signupController,
  loginController,
  getUserController,
  updateUserController,
  deleteUserController,
};
