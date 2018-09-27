/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_protype', {
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
    tableName: 'bd_protype'
  });

  Model.associate = function() {

  }

  return Model;
};
