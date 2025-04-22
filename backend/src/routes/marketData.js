const express = require('express');
const router = express.Router();
const { getMarketData } = require('../controllers/marketDataController');

// GET /api/market-data?symbols=AAPL,MSFT
router.get('/', getMarketData);

module.exports = router;