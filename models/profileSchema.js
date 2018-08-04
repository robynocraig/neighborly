const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  residency: { type: Date, required: true }
});
// change model here for schema for user profile, userSeed is complete with db.users.
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;