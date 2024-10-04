



// const express = require('express');
// const router = express.Router();
// const Space = require('../models/Space');

// const requireAuth = (req, res, next) => {
//   const token = req.headers.authorization;

//   // Check if token exists
//   if (token) {
//     // Remove the 'Bearer ' prefix if present
//     const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;

//     jwt.verify(tokenWithoutBearer, process.env.ACCESS_SECRET_TOKEN, (err, decodedToken) => {
//       if (err) {
//         return res.status(401).json({ error: 'Invalid token' });
//       } else {
//         // decoded token contains user information
//         req.user = decodedToken;
//         console.log('Decoded token:', decodedToken); // Debug log
//         next();
//       }
//     });
//   } else {
//     res.status(401).json({ error: 'Token required' });
//   }
// };

// // GET /spaces - Fetch all spaces
// router.get('/spaces', async (req, res) => {
//   try {
//     const spaces = await Space.find();
//     res.json(spaces);
//   } catch (err) {
//     console.error('Error fetching spaces:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });
// // Fetch all spaces added by the authenticated user


// router.post('/spaces', async (req, res) => {
//   try {
//     const { name, location, capacity, amenities, description, date, times } = req.body;

//     // Ensure amenities is an array
//     const amenitiesArray = Array.isArray(amenities) ? amenities : amenities.split(',').map(item => item.trim());

//     const newSpace = new Space({
//       name,
//       location,
//       capacity,
//       amenities: amenitiesArray,
//       description,
//       date,
//       times
//     });
//     await newSpace.save();
//     res.status(201).json(newSpace);
//   } catch (err) {
//     console.error('Error creating space:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// router.put('/spaces/:id', async (req, res) => {
//   try {
//     const { name, location, capacity, amenities, description, date, times } = req.body;

//     // Ensure amenities is an array
//     const amenitiesArray = Array.isArray(amenities) ? amenities : amenities.split(',').map(item => item.trim());

//     const updatedSpace = await Space.findByIdAndUpdate(
//       req.params.id,
//       { name, location, capacity, amenities: amenitiesArray, description, date, times },
//       { new: true }
//     );
//     if (!updatedSpace) {
//       return res.status(404).json({ message: 'Space not found' });
//     }
//     res.json(updatedSpace);
//   } catch (err) {
//     console.error('Error updating space:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // DELETE /admin/spaces/:id - Delete a space
// router.delete('/spaces/:id', async (req, res) => {
//   try {
//     const deletedSpace = await Space.findByIdAndDelete(req.params.id);
//     if (!deletedSpace) {
//       return res.status(404).json({ message: 'Space not found' });
//     }
//     res.json({ message: 'Space deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting space:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // PATCH /admin/space/spaces/:id/approve - Approve a space
// router.patch('/spaces/:id/approve', async (req, res) => {
//   try {
//     const updatedSpace = await Space.findByIdAndUpdate(req.params.id, { approvalStatus: 'approved' }, { new: true });
//     if (!updatedSpace) {
//       return res.status(404).json({ message: 'Space not found' });
//     }
//     res.json(updatedSpace);
//   } catch (err) {
//     console.error('Error approving space:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // PATCH /admin/space/spaces/:id/decline - Decline a space
// router.patch('/spaces/:id/decline', async (req, res) => {
//   try {
//     const updatedSpace = await Space.findByIdAndUpdate(req.params.id, { approvalStatus: 'declined' }, { new: true });
//     if (!updatedSpace) {
//       return res.status(404).json({ message: 'Space not found' });
//     }
//     res.json(updatedSpace);
//   } catch (err) {
//     console.error('Error declining space:', err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // GET /admin/space/spaces/:approvalStatus - Fetch spaces by approval status
// router.get('/spaces/:approvalStatus', async (req, res) => {
//   const { approvalStatus } = req.params;
//   try {
//     const spaces = await Space.find({ approvalStatus });
//     res.json(spaces);
//   } catch (err) {
//     console.error(`Error fetching ${approvalStatus} spaces:`, err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// router.get('/spaces/approved',getApprovedSpaces = async (req, res) => {
//   try {
//     const approvedSpaces = await Space.find({ approvalStatus: 'approved' });
//     res.status(200).json(approvedSpaces);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching approved spaces' });
//   }
// });


// module.exports = router;

const express = require('express');
const router = express.Router();
const Space = require('../models/Space');
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;

    jwt.verify(tokenWithoutBearer, process.env.ACCESS_SECRET_TOKEN, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ error: 'Token required' });
  }
};

// GET /spaces - Fetch all spaces
router.get('/spaces', async (req, res) => {
  try {
    const spaces = await Space.find();
    res.json(spaces);
  } catch (err) {
    console.error('Error fetching spaces:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /spaces - Create a new space
router.post('/spaces', async (req, res) => {
  try {
    const { name, location, capacity, amenities, description, date, times } = req.body;

    const amenitiesArray = Array.isArray(amenities) ? amenities : amenities.split(',').map(item => item.trim());

    const newSpace = new Space({
      name,
      location,
      capacity,
      amenities: amenitiesArray,
      description,
      date,
      times,
      approvalStatus: 'waiting' // Default status when a new space is created
    });

    await newSpace.save();
    res.status(201).json(newSpace);
  } catch (err) {
    console.error('Error creating space:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT /spaces/:id - Update a space
router.put('/spaces/:id', async (req, res) => {
  try {
    const { name, location, capacity, amenities, description, date, times } = req.body;
    const amenitiesArray = Array.isArray(amenities) ? amenities : amenities.split(',').map(item => item.trim());

    const updatedSpace = await Space.findByIdAndUpdate(
      req.params.id,
      { name, location, capacity, amenities: amenitiesArray, description, date, times },
      { new: true }
    );

    if (!updatedSpace) {
      return res.status(404).json({ message: 'Space not found' });
    }

    res.json(updatedSpace);
  } catch (err) {
    console.error('Error updating space:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE /spaces/:id - Delete a space
router.delete('/spaces/:id', async (req, res) => {
  try {
    const deletedSpace = await Space.findByIdAndDelete(req.params.id);
    if (!deletedSpace) {
      return res.status(404).json({ message: 'Space not found' });
    }
    res.json({ message: 'Space deleted successfully' });
  } catch (err) {
    console.error('Error deleting space:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PATCH /spaces/:id/status - General endpoint to update approval status
router.patch('/spaces/:id/status', async (req, res) => {
  const { status } = req.body;
  try {
    const updatedSpace = await Space.findByIdAndUpdate(
      req.params.id,
      { approvalStatus: status },
      { new: true }
    );
    if (!updatedSpace) {
      return res.status(404).json({ message: 'Space not found' });
    }
    res.json(updatedSpace);
  } catch (err) {
    console.error('Error updating space status:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PATCH /spaces/:id/approve - Specific endpoint to approve a space
router.patch('/spaces/:id/approve', async (req, res) => {
  try {
    const updatedSpace = await Space.findByIdAndUpdate(req.params.id, { approvalStatus: 'approved' }, { new: true });
    if (!updatedSpace) {
      return res.status(404).json({ message: 'Space not found' });
    }
    res.json(updatedSpace);
  } catch (err) {
    console.error('Error approving space:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PATCH /spaces/:id/decline - Specific endpoint to decline a space
router.patch('/spaces/:id/decline', async (req, res) => {
  try {
    const updatedSpace = await Space.findByIdAndUpdate(req.params.id, { approvalStatus: 'declined' }, { new: true });
    if (!updatedSpace) {
      return res.status(404).json({ message: 'Space not found' });
    }
    res.json(updatedSpace);
  } catch (err) {
    console.error('Error declining space:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET /spaces/:approvalStatus - Fetch spaces by approval status
router.get('/spaces/status/:approvalStatus', async (req, res) => {
  const { approvalStatus } = req.params;
  try {
    const spaces = await Space.find({ approvalStatus });
    res.json(spaces);
  } catch (err) {
    console.error(`Error fetching ${approvalStatus} spaces:`, err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET /spaces/approved - Fetch approved spaces
router.get('/spaces/approved', async (req, res) => {
  try {
    const approvedSpaces = await Space.find({ approvalStatus: 'approved' });
    res.status(200).json(approvedSpaces);
  } catch (err) {
    console.error('Error fetching approved spaces:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
