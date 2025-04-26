const express = require('express');
const { getTopUpHistory } = require('../controllers/topupHistory');

const router = express.Router();

router.get('/', getTopUpHistory);

module.exports = router;
