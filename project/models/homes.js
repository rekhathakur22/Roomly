const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  homename: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  img: String,
  description: String,
});

module.exports = mongoose.model("Home", homeSchema);
