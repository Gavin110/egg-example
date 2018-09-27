/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_stock', {
    ID: {
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
    },
    StockAddr: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StockNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    StockSum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    StorageType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StockType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Provider: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProRank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    ModifyTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    Modifier: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'bd_stock'
  });

  Model.associate = function() {

  }

  return Model;
};
