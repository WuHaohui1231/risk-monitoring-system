const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const marketRoutes = require('./routes/marketData');
const positionsRoutes = require('./routes/positions');
const marginRoutes = require('./routes/margin');

const app = express();
app.use(bodyParser.json());

app.use('/api/market-data', marketRoutes);
app.use('/api/positions', positionsRoutes);
app.use('/api/margin-status', marginRoutes);

const PORT = process.env.PORT || 4000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('DB Connection Error:', err));