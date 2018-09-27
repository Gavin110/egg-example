/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_user_collect', {
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
    ProType: {
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
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'bd_user_collect'
  });

  Model.associate = function() {

  }

  return Model;
};
