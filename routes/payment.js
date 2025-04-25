const express = require('express');
const router = express.Router();
const Omise = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { token, amount } = req.body;

  try {
    const charge = await Omise.charges.create({
      amount,
      currency: 'thb',
      card: token,
    });

    // เพิ่มยอดเงินให้ผู้ใช้
    const user = await User.findById(req.user.id);
    user.balance += amount / 100;
    await user.save();

    res.status(200).json({ success: true, charge });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;
