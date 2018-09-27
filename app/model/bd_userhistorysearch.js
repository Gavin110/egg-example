/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_userhistorysearch', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SearchContent: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SearchTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'bd_userhistorysearch'
  });

  Model.associate = function() {

  }

  return Model;
};
