const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  picture: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  drop: { type: String, required: true },
  aboutMe: { type: String, required: true }//schema for profile
});

const User = mongoose.model("User", profileSchema);

module.exports = User;