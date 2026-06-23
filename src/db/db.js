const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected sucessfully");
  } catch (err) {
    // console.log()
    console.error("Database connection errros: ", err);
  }
}

module.exports = connectDB;
