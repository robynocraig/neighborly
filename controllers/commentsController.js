const db = require("../models");


// Defining methods for the commentsController
module.exports = {
  findAll: function (req, res) {
    db.Comments
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Comments
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Comments
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.Comments
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  remove: function (req, res) {
    db.Comments
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getCommentReplies: function (req, res) {
    db.Reply
    .find(req.query)
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

  },

  newCommentReplies: function (req, res) {
    db.Reply
    db.Comments.reply.push(db.Reply._id)
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  

  // aUser.clients.push(client).

  
  // newCommentReplies: async function (req, res) {
  //  const reply = new Reply();
  //  reply.reply=req.body.content;
  //  reply.comment=comment._id;
  //  await reply.save();

  //  comment.reply.push(reply._id);
  //  await comment.save();

  //  res.send(reply);
  // }

  

};
