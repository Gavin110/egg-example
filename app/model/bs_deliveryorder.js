/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bs_deliveryorder', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DeliveryID: {
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
    Number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AddrDetail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OrderType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpressCompany: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpressNum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpressFee: {
      type: "DOUBLE",
      allowNull: true
    },
    DeliveryDate: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    DeliveryStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeceiveDate: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    Context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OrderID: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'bs_deliveryorder'
  });

  Model.associate = function() {

  }

  return Model;
};
