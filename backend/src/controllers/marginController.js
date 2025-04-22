const { Position, MarketData, Margin } = require('../models');
const MMR = 0.25;

exports.getMarginStatus = async (req, res) => {
  const clientId = req.params.clientId;

  const positions = await Position.findAll({ where: { client_id: clientId } });
  const loan = await Margin.findOne({ where: { client_id: clientId } });

  // fetch latest prices from market_data table
  const symbols = positions.map(p => p.symbol);
  const prices = await MarketData.findAll({ where: { symbol: symbols } });

  const priceMap = Object.fromEntries(prices.map(p => [p.symbol, parseFloat(p.current_price)]));

  const portfolioValue = positions.reduce((sum, p) => sum + p.quantity * priceMap[p.symbol], 0);
  const netEquity = portfolioValue - parseFloat(loan.loan_amount);
  const marginReq = MMR * portfolioValue;
  const shortfall = marginReq - netEquity;
  const marginCall = shortfall > 0;

  res.json({
    portfolioValue,
    loanAmount: parseFloat(loan.loan_amount),
    netEquity,
    marginRequirement: marginReq,
    marginShortfall: shortfall,
    marginCall
  });
};