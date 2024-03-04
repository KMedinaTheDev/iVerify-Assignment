// Scan model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scanSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  device: { type: Schema.Types.ObjectId, ref: 'Device', required: true },
  osVersion: { type: String, required: true },
  appVersion: { type: String, required: true },
  secure: { type: Boolean, default: true },
  threats: { type: String, default: null },
});

const Scan = mongoose.model('Scan', scanSchema);

module.exports = Scan;
