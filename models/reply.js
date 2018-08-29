const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
  reply: { type: String },
  //   {posterPicture: {type: String, required: true},
  //   posterEmail:{ type: String, required: true },
  //   date: { type: String, required: true },
  //   posterName: { type: String, required: true }
  // }
  comment:{type: Schema.Types.ObjectId,
    ref:'Comments'

  }
});

const Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;
