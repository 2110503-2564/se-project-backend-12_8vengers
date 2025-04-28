// const express = require('express');
// const {register, login, getMe, logout} = require('../controllers/auth');

// const router = express.Router();

// const {protect} = require('../middleware/auth');

// router.post('/register', register);
// router.post('/login', login);
// router.get('/me', protect, getMe);
// router.get('/logout', protect, logout);

// module.exports = router;

const express = require('express');
const { register, login, getMe, logout } = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authentication and profile
 */

/**
/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - tel
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Phrim"
 *               tel:
 *                 type: string
 *                 example: "0123456789"
 *               email:
 *                 type: string
 *                 example: "phrim@gmail.com"
 *               password:
 *                 type: string
 *                 example: "12345678"
 *               role:
 *                 type: string
 *                 enum: [user, admin]
 *                 default: user
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Log in user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: phrim@gmail.com
 *               password:
 *                 type: string
 *                 example: 12345678
 *     responses:
 *       200:
 *         description: User logged in successfully
 */

/**
 * @swagger
 * /api/v1/auth/me:
 *   get:
 *     summary: Get current logged-in user's profile
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully fetched user profile
 */

/**
 * @swagger
 * /api/v1/auth/logout:
 *   get:
 *     summary: Logout user
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 */

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout', protect, logout);

module.exports = router;
