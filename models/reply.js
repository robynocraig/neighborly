const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema({
 commentId:{type:String, required: false},
 reply:{type:String, required:false}
 
});

const Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;
