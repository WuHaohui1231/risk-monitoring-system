const { MarketData } = require('../models');
// Import MarketData model directly
// Note: This is already imported via the models index above
// const MarketData = require('../models/MarketData');

const { fetchPrices } = require('../services/marketApiService');

exports.getMarketData = async (req, res) => {
  try {
    const symbols = req.query.symbols.split(',');
    const prices = await fetchPrices(symbols);

    // Upsert into DB
    const records = await Promise.all(symbols.map(async (sym) => {
      const price = parseFloat(prices[sym]);
      return MarketData.create({ symbol: sym, current_price: price, timestamp: new Date() });
    }));

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};