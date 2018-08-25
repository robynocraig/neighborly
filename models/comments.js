const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: { type: String, required: true },
  comment: { type: String, required: true },
  posterEmail: { type: String, required: true },
  posterName: { type: String, required: true },
  posterPicture: { type: String, required: true },
  posterAddress: { type: String, required: true },
  date: { type: String, required: true },
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;
