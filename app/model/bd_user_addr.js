/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_user_addr', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    AddrID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Receiver: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddrProvince: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddrCity: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddRegion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddrDetail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DefaultAddr: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'bd_user_addr'
  });

  Model.associate = function() {

  }

  return Model;
};
