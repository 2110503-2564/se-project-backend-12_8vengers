const express = require('express');
const { protect } = require('../middleware/auth');
const { updateBalance } = require('../controllers/payment');

const router = express.Router();

router.post('/updateBalance', protect, updateBalance);

module.exports = router;
