const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: false,
    unique: false,
  },
  lastName: {
    type: String,
    required: false,
    unique: false,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    requried: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
