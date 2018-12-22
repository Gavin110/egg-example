'use strict';

// had enabled by egg
// exports.static = true;
module.exports = {
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    },
    mysql: {
        enable: true,
        package: 'egg-mysql',
    },
    mssql: {
        enable: true,
        package: 'egg-mssql',
    }
}
