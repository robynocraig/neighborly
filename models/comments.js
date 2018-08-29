const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: { type: String, required: false },
  comment: { type: String, required: false },
  posterEmail: { type: String, required: false },
  posterName: { type: String, required: false },
  posterPicture: { type: String, required: false },
  posterAddress: { type: String, required: false },
  date: { type: String, required: false },
  reply:[{
    type: Schema.Types.ObjectId,
      ref:'Reply'
  }]
});

const Comments = mongoose.model("Comments", commentSchema);

module.exports = Comments;

