

// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config()
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const authRoutes = require('./routes/auth');
// const adminRoutes = require('./routes/admin');
// const spaceRoutes = require('./routes/spacesRoutes');
// const eventRoutes = require('./routes/eventRoutes');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 5000;

// const MONGODB_URI =process.env.MONGO_URL

// // app.use(cors()); // Allow all origins by default. Configure as needed.


// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));

// app.use(express.json());

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//     process.exit(1);
//   });

// // server.js or app.js
// // app.use('/uploads', express.static('uploads'));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error('Error handling middleware:', err);
//   res.status(500).json({ message: 'Internal server error' });
// });

// app.use('/auth', authRoutes);
// app.use('/admin', adminRoutes);
// app.use('/admin/space',spaceRoutes)
// app.use('/api/events', eventRoutes);
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });




const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const spaceRoutes = require('./routes/spacesRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reviewRoutes = require('./routes/reviewRoutes'); // Add review routes
const blogRoutes = require('./routes/blogRoutes');
const Token = require('./models/Token'); // Import the Token model
const path = require('path');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const contactRoutes=require('./routes/contactRoute')

const app = express();
const PORT = process.env.PORT || 5000;

const MONGODB_URI =process.env.MONGO_URL

// app.use(cors()); // Allow all origins by default. Configure as needed.


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
// Replace these with your actual keys
const vapidPublicKey = 'BK2XVyWPbsV-FdGF8-CuoUSHYRu9L_rRUs5gb8Qf5bMsj09nS3AbKd9Ldm9TrXZjtoS3v0PjkZgtk32GetA56xg';
const vapidPrivateKey = 'RpM9xVUllxuul7gbJrm7LgGyivDK8nqCHrj8vwq6wh8';

// Set VAPID details
webPush.setVapidDetails(
  'mailto:your-email@example.com', // Your contact email
  vapidPublicKey,
  vapidPrivateKey
);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });




app.use(bodyParser.json());
// server.js or app.js
// app.use('/uploads', express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error handling middleware:', err);
  res.status(500).json({ message: 'Internal server error' });
});

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/admin/space',spaceRoutes)

app.use('/api', reviewRoutes); // Add review routes
app.use('/api/events', eventRoutes);
app.use('/api/contact',contactRoutes)

app.use('/api', blogRoutes);
app.get('/', (req, res) => {
  res.send('Hello World');
});


// Save subscription
app.post('/subscribe', async (req, res) => {
  const { endpoint, keys } = req.body;

  if (!endpoint || !keys || !keys.auth || !keys.p256dh) {
    return res.status(400).send('Invalid subscription data');
  }

  try {
    const existingToken = await Token.findOne({ endpoint });

    if (existingToken) {
      // Optionally update the existing subscription if keys have changed
      existingToken.keys = keys;
      await existingToken.save();
    } else {
      // Create a new subscription if it does not already exist
      const newToken = new Token({ endpoint, keys });
      await newToken.save();
    }

    res.status(200).send('Subscription saved successfully');
  } catch (error) {
    console.error('Error saving subscription:', error);
    res.status(500).send('Error saving subscription');
  }
});

// Send notification
app.post('/send-notification', async (req, res) => {
  const { title, body } = req.body;

  try {
    const subscriptions = await Token.find();

    const notifications = subscriptions.map(subscription => ({
      endpoint: subscription.endpoint,
      keys: subscription.keys,
    }));

    const notificationPayload = JSON.stringify({
      notification: {
        title,
        body,
      },
    });

    await Promise.all(
      notifications.map(subscription =>
        webPush.sendNotification(subscription, notificationPayload)
      )
    );

    res.status(200).send('Notifications sent successfully');
  } catch (error) {
    console.error('Error sending notifications:', error);
    res.status(500).send('Error sending notifications');
  }
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error handling middleware:', err);
  res.status(500).json({ message: 'Internal server error' });
});
