const bcrypt = require("bcrypt");
const User = require("../models/user");

const signupController = async (req, res) => {
  const { username, password, email } = req.body;
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
  await User.find({});
};

const updateUserController = async (req, res) => {
  // update
  const { filter, nameToChange } = req.body;
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
