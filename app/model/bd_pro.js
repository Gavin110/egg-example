/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_pro', {
    ID: {
      type: DataTypes.INTEGER(11),
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
    Brands: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Category: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Series: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Texture: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SellingPrice: {
      type: "DOUBLE",
      allowNull: true
    },
    CostPrice: {
      type: "DOUBLE",
      allowNull: true
    },
    TotalInventory: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AdleancloundImg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AdLocalImg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AdImgName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProductDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Craftwork: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Material: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProOrigin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProStandard: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProRank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsHomePro: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsSignPro: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IsSellOut: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Factory: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ProductType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsShangJia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsDelete: {
      type: DataTypes.STRING(50),
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
    tableName: 'bd_pro'
  });

  Model.associate = function() {

  }

  return Model;
};
