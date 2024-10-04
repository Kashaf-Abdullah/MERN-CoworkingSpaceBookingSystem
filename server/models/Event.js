// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventPoster: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    meetLink: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
