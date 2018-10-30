/* indent size: 2 */

module.exports = app => {
    const DataTypes = app.Sequelize;

    const Model = app.model.define('T_DRAW_BRAND', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        BRAND: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        SELE: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        tableName: 'T_DRAW_BRAND',
        timestamps: false,
    });

    Model.associate = function() {

    }

    return Model;
};
