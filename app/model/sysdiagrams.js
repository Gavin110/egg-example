/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sysdiagrams', {
    name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    principal_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    diagram_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    definition: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'sysdiagrams'
  });

  Model.associate = function() {

  }

  return Model;
};
