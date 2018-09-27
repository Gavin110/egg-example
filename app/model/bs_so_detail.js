/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bs_so_detail', {
    ID: {
      type: DataTypes.INTEGER(11),
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
    Series: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SellingPrice: {
      type: "DOUBLE",
      allowNull: true
    },
    Quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    leancloundURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OrderType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'bs_so_detail'
  });

  Model.associate = function() {

  }

  return Model;
};
