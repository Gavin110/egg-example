/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bs_so_invoice', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(50),
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
    OrgName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TaxpayerCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RegistereAddr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RegistereNum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountBank: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AccountNum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Taker: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TakerPhone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TakerAddr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    InvoiceDate: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    TakerSelectAddr: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'bs_so_invoice'
  });

  Model.associate = function() {

  }

  return Model;
};
