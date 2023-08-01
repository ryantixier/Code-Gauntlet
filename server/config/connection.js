const mongoose = require("mongoose");

console.log(process.env.SECRET);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/code-gauntlet"
);

module.exports = mongoose.connection;
