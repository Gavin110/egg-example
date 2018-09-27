/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bd_user_entinfo', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    EntID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EntName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TaxpayerCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RegistereAddr: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RegistereNum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountBank: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AccountNum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    InvoiceContent: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ContactName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ContactAdd: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserIdentity: {
      type: DataTypes.STRING(50),
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
    tableName: 'bd_user_entinfo'
  });

  Model.associate = function() {

  }

  return Model;
};
