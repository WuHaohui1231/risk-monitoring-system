const express = require('express');
const router = express.Router();
const { getPositions, createPosition } = require('../controllers/positionsController');

// GET /api/positions/:clientId
router.get('/:clientId', getPositions);
// POST /api/positions
router.post('/', createPosition);

module.exports = router;