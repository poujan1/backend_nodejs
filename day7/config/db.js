const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pujan:Paneru%40321@nihareeka.knwy0rq.mongodb.net/"
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectDb,
};
