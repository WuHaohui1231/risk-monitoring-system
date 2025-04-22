module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Margin', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      client_id: { type: DataTypes.INTEGER, allowNull: false },
      loan_amount: { type: DataTypes.DECIMAL(14,2), allowNull: false },
    }, {
      tableName: 'margins',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });
  };