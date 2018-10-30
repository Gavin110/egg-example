/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('db_raffle_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sele: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'db_raffle_user',
    timestamps: false,
  });

  Model.associate = function() {

  }

  return Model;
};
