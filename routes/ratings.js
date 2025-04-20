const express = require('express');
const { rateCoWorkingSpace, getAverageRating} = require('../controllers/ratings');

const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, rateCoWorkingSpace);
router.get('/average/:coWorkingSpaceId', getAverageRating);

module.exports = router;
