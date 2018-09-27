/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bs_saleorder', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    OrderID: {
      type: DataTypes.STRING(50),
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
    AddrCity: {
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
    TolOriginalPrice: {
      type: "DOUBLE",
      allowNull: true
    },
    PayAmount: {
      type: "DOUBLE",
      allowNull: true
    },
    TolDiscount: {
      type: "DOUBLE",
      allowNull: true
    },
    Freight: {
      type: "DOUBLE",
      allowNull: true
    },
    InvoiceType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InvoiceTitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InvoiceContent: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PayType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    ProType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FaHuoTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    ShouHuoTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    ModifyOrderID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ModifyTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    IsShow: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    CancelReason: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    CancelDetail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CancelTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'bs_saleorder'
  });

  Model.associate = function() {

  }

  return Model;
};
