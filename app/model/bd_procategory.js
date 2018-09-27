/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_procategory', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    English: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Chinese: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'bd_procategory'
  });

  Model.associate = function() {

  }

  return Model;
};
