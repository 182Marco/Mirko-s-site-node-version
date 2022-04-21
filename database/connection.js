const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MONGO DB connected: ${connection.connection.host}`);
  } catch (er) {
    console.error(`error in connecting to the DB: ${er}`);
    process.exit(true);
  }
};

module.exports = connectDB;
