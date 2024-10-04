const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  endpoint: {
    type: String,
    required: true,
    unique: true, // Ensure unique index
  },
  keys: {
    auth: { type: String, required: true },
    p256dh: { type: String, required: true },
  },
});

module.exports = mongoose.model('Token', tokenSchema);
