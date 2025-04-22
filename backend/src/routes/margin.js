const express = require('express');
const router = express.Router();
const { getMarginStatus } = require('../controllers/marginController');

// GET /api/margin-status/:clientId
router.get('/:clientId', getMarginStatus);

module.exports = router;