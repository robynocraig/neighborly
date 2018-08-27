const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
  reply: { type: String, required: false }
  //   {posterPicture: {type: String, required: true},
  //   posterEmail:{ type: String, required: true },
  //   date: { type: String, required: true },
  //   posterName: { type: String, required: true }
  // }
});

const Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;
