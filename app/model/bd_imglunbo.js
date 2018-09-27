/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_imglunbo', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ImgLunBoType: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    Series: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdLocalImgURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LeanCloundImgURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'bd_imglunbo'
  });

  Model.associate = function() {

  }

  return Model;
};
