const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://noreplythehappychildclinic_db_user:paneru555@pujancluster.u3owhw0.mongodb.net/?retryWrites=true&w=majority&appName=pujanCluster"
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectDb,
};
