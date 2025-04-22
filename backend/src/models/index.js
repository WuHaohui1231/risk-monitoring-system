const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Import individual model definitions
const Position  = require('./Position')(sequelize, Sequelize.DataTypes);
const MarketData = require('./MarketData')(sequelize, Sequelize.DataTypes);
const Margin    = require('./Margin')(sequelize, Sequelize.DataTypes);

// Export the initialized Sequelize instance and models
module.exports = {
  sequelize,
  Position,
  MarketData,
  Margin
};



// backend/src/models/index.js
// 'use strict';
// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// require('dotenv').config();

// const db = {};
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'postgres',
//   }
// );

// fs
//   .readdirSync(__dirname)
//   .filter(file => file !== 'index.js' && file.slice(-3) === '.js')
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;


// const Sequelize = require('sequelize');
// const sequelize = require('../config/database');

// const Position = require('./Position')(sequelize, Sequelize.DataTypes);
// const MarketData = require('./MarketData')(sequelize, Sequelize.DataTypes);
// const Margin = require('./Margin')(sequelize, Sequelize.DataTypes);

// module.exports = { sequelize, Position, MarketData, Margin };