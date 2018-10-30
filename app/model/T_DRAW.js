/* indent size: 2 */

module.exports = app => {
    const DataTypes = app.Sequelize;

    const Model = app.model.define('T_DRAW', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        NAME: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        TELNUMBER: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        SELE: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        tableName: 'T_DRAW',
        timestamps: false,
    });

    Model.associate = function() {

    }

    return Model;
};
