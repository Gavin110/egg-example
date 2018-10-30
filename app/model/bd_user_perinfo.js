/* indent size: 2 */

module.exports = app => {
    const DataTypes = app.Sequelize;
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Model = app.model.define('bd_user_perinfo', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        UserID: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        UnionID: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        UserName: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Password: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Phone: {
            type: DataTypes.CHAR(11),
            allowNull: true
        },
        Gender: {
            type: DataTypes.CHAR(2),
            allowNull: true
        },
        Email: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        LoginType: {
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
        tableName: 'bd_user_perinfo',
        timestamps: false,
    });

    Model.findAlllist = async () => {
        console.log("aoao");
        return await this.findAll();
    }

    Model.associate = function () {

    }

    return Model;
};
