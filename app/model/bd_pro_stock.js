/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_pro_stock', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ProductID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StockAddr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    UpdateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    Modifier: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'bd_pro_stock'
  });

  Model.associate = function() {

  }

  return Model;
};
