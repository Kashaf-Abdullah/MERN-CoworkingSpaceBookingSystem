// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

const multer = require('multer');

// Setup Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Folder to store uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`); // Naming convention for uploaded files
    }
  });
  
  const upload = multer({ storage: storage });
  
// Route to create an event
router.post('/create', upload.single('eventPoster'),async (req, res) => {
    try {
        const { title, description, meetLink, startTime, endTime } = req.body;
        const newEvent = new Event({ title, description, meetLink, startTime, endTime ,
            eventPoster: req.file ? `/uploads/${req.file.filename}` : null,
  
        });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
