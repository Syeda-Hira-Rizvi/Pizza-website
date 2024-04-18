const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");

const connectDB = async () => {
  try {
    const URI = process.env.DB_URI;
    const conn = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
