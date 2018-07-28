const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managementSchema = new Schema({
  title: { type: String, required: true },
  mockString: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Management = mongoose.model("Management", managementSchema);

module.exports = Management;