/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('cm_syspara', {
    ParameterID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ParameterType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ParaName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'cm_syspara'
  });

  Model.associate = function() {

  }

  return Model;
};
