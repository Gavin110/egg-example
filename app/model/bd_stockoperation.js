/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_stockoperation', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    StockID: {
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
    ProRank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StockName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StockInOrOut: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Operation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Provider: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DataType: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    OrderID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Creater: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    tableName: 'bd_stockoperation'
  });

  Model.associate = function() {

  }

  return Model;
};
