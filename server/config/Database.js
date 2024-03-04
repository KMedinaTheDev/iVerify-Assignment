const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const deviceSchema = new Schema({
  model: String,
  uniqueIdentifier: String,
});

const scanSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  device: { type: Schema.Types.ObjectId, ref: 'Device' },
  osVersion: String,
  appVersion: String,
  secure: Boolean,
  threats: String,
});

const User = mongoose.model('User', userSchema);
const Device = mongoose.model('Device', deviceSchema);
const Scan = mongoose.model('Scan', scanSchema);

module.exports = {
  User,
  Device,
  Scan,
};