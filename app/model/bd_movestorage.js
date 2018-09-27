/* indent size: 2 */


module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_movestorage', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MoveStorageID: {
      type: DataTypes.STRING(50),
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
    OldProRank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NewProRank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OldStorage: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NewStorage: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OldStockNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    NewStockNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MoveStorageType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ModifyNum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ModifyType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ModifyReason: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsDelete: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    ModifyTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    Creater: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'bd_movestorage'
  });

  Model.associate = function() {

  }

  return Model;
};
