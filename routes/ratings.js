// const express = require('express');
// const { rateCoWorkingSpace, getAverageRating} = require('../controllers/ratings');

// const { protect } = require('../middleware/auth');

// const router = express.Router();

// router.post('/', protect, rateCoWorkingSpace);
// router.get('/average/:coWorkingSpaceId', getAverageRating);

// module.exports = router;
const express = require('express');
const { rateCoWorkingSpace, getAverageRating } = require('../controllers/ratings');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, rateCoWorkingSpace);

// ✅ แก้ชื่อ param ให้ถูกต้อง (coWorkingSpaceId)
router.get('/average/:coWorkingSpaceId', getAverageRating);

module.exports = router;

