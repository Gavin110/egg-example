/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bs_do_detail', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DeliveryID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OrderID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProductID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProductName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    StockID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StockName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'bs_do_detail'
  });

  Model.associate = function() {

  }

  return Model;
};
