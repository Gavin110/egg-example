/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bs_so_rgdetail', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OrderID: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ServiceID: {
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
    ImageName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'bs_so_rgdetail'
  });

  Model.associate = function() {

  }

  return Model;
};
