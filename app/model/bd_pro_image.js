/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_pro_image', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ImageName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ProductID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    leancloundURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    localURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Sequence: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ImgType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ImgDes: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'bd_pro_image'
  });

  Model.associate = function() {

  }

  return Model;
};
