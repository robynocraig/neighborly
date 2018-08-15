const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/neighborly-database"
);

const userSeed = [
  {
    email: "mbarbotiko@gmail.com",
    name : "Margarita Barbotiko",
    picture: "https://media.licdn.com/dms/image/C4E03AQFPiSdg1UOjgQ/profile-displayphoto-shrink_800_800/0?e=1538611200&v=beta&t=pzLjjUKbN3FCFL9bWg4xjlSKrrtqMleEOFD4KEbfbws",
    address : "Whatever",
    city : "Minneapolis",
    state: "MN",
    zip : "55406",
    about: "PLEASE WORK",
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " users records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
