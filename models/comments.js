const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;