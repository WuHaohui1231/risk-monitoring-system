module.exports = (sequelize, DataTypes) => {
    return sequelize.define('MarketData', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      symbol: { type: DataTypes.STRING(10), allowNull: false },
      current_price: { type: DataTypes.DECIMAL(12,4), allowNull: false },
      timestamp: { type: DataTypes.DATE, allowNull: false },
    }, {
      tableName: 'market_data',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
    });
  };