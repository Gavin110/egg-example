/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_admininfo', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AdminID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AdminIdentity: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserLevel: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LastlogTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'bd_admininfo'
  });

  Model.associate = function() {

  }

  return Model;
};
