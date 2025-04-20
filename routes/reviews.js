const express = require('express');
const router = express.Router();
const { getReview, createReview, editReview, deleteReview, getReviewsByCoWorkingSpace } = require('../controllers/reviews');
const { protect } = require('../middleware/auth');

// GET สำหรับดึงรีวิวโดยใช้ reservationId จาก params
router.get('/:reservationId', protect, getReview);

// POST สำหรับสร้างรีวิวใหม่
router.post('/:reservationId', protect, createReview);

// PUT สำหรับแก้ไขรีวิวที่มีอยู่
router.put('/:reviewId', protect, editReview); // เดิมคือ reservationId

router.delete('/:reviewId', protect, deleteReview);

// GET สำหรับดึงรีวิวโดยใช้ coWorkingSpaceId
router.get('/coworking/:coWorkingSpaceId', protect, getReviewsByCoWorkingSpace);


module.exports = router;
