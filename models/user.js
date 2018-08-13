const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // email: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },//drop from edit profile js and components
  zip: { type: String, required: true },
  about: { type: String, required: true },
  // selectedFile:{ type:String, required:true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;