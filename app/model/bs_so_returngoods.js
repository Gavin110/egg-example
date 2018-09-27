/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bs_so_returngoods', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    OrderID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ServiceID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UserID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ServiceType: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HuanHuoReason: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TuiHuoReason: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ServiceDetail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ServiceAmount: {
      type: "DOUBLE",
      allowNull: true
    },
    ServiceUploadPic: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ServiceStatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ServiceRemark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PicIndex: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    CreateTime: {
      type: DataTypes.TIME,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    ApproveTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    FaHuoTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    ExpressCompany: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpressNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TuiKuanTime: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    ExpressComBySeller: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ExpressNumbySeller: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ModifyOrderID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IsShow: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'bs_so_returngoods'
  });

  Model.associate = function() {

  }

  return Model;
};
