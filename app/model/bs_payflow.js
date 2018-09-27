/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bs_payflow', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    PayFlowId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OrderID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OrderType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PayAmount: {
      type: "DOUBLE",
      allowNull: true
    },
    PayWay: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PayDate: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'bs_payflow'
  });

  Model.associate = function() {

  }

  return Model;
};
