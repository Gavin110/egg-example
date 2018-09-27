/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_user_shopcart', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProductID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Series: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProductName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SellingPrice: {
      type: "DOUBLE",
      allowNull: true
    },
    AdleancloundImg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    IsOrder: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'bd_user_shopcart'
  });

  Model.associate = function() {

  }

  return Model;
};
