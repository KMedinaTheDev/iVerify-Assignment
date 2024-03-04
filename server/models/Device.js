// Device model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  model: { type: String, required: true },
  uniqueIdentifier: { type: String, required: true, unique: true },
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
