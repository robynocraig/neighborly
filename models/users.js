const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  residency: { type: String, required: true }
});

const User = mongoose.model("User", profileSchema);

module.exports = User;