const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: { type: String, required: true },
  comment: { type: String, required: true },
  posterEmail: { type: String, required: true },
  posterName: { type: String, required: true },
  posterPicture: { type: String, requried: true },
  date: { type: Date, default: Date.now },
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;