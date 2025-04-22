module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Position', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      client_id: { type: DataTypes.INTEGER, allowNull: false },
      symbol: { type: DataTypes.STRING(10), allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      cost_basis: { type: DataTypes.DECIMAL(12,4) },
    }, {
      tableName: 'positions',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  };