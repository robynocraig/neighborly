const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/neighborly-database"
);

const userSeed = [
  {
    name: "Ryan McAleese",
    picture: "https://media.licdn.com/dms/image/C4E03AQFPiSdg1UOjgQ/profile-displayphoto-shrink_800_800/0?e=1538611200&v=beta&t=pzLjjUKbN3FCFL9bWg4xjlSKrrtqMleEOFD4KEbfbws",
    residency:"New Age Apartments"
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
