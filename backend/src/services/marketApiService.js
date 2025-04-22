const axios = require('axios');
const API_KEY = process.env.API_KEY;

async function fetchPrices(symbols) {
  const resp = await axios.get(`https://api.twelvedata.com/price?symbol=${symbols.join(',')}&apikey=${API_KEY}`);
  return resp.data;
}

module.exports = { fetchPrices };