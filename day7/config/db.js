const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URl);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectDb,
};
