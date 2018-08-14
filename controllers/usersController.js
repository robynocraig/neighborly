const db = require("../models");

// Defining methods for the managementsController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findByEmail: function(req, res) {
  //   db.User
  //     .update(
  //       { email: req.body.email },
  //       { $set : { email: req.body.email, name: req.body.name, picture: req.body.picture, address: req.body.address, city: req.body.city, state: req.body.state, zip: req.body.zip, about: req.body.about } },
  //       { upsert: true, multi: true },
  //       function(err, inserted) {
  //         if (err) {
  //           console.log(err);
  //         } else {
  //           console.log(inserted);
  //         }
  //       }
  //     )
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findByEmail: function (req, res) {
    db.User
      .findOne({ email: req.params.email }, function (err, user) {
        if (!err) {
          if (user) {
            res.json({ exists: true });
          } else {
            res.json({ exists: false });
          }
        }

        // if (user) {
        //   // there is user

        //   // res.json({success: true, user: user});

        //   return { exists = true };
        // } else {
        //   // there is no user

        //   // res.json({success: false});

        //   return { exists = false };
        // }
      })
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.User
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ email: req.params.email }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

