'use strict';
const systemConfig = require("../utils/config");
module.exports = appInfo => {
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_yes';

    // add your config here
    config.middleware = [];

    config.sequelize = {
        // support: mysql, mariadb, postgres, mssql

        //SQLServer
        // dialect: 'mssql',
        // database: 'SYCP-TEST',
        // host: systemConfig.hostByCP,
        // port: '1433',
        // username: 'sa',
        // password: systemConfig.sqlServerPassword,

        //MySQL：sycp
        // dialect: 'mysql',
        // database: 'sycp',
        // host: systemConfig.hostByME,
        // port: '3306',
        // username: 'root',
        // password: systemConfig.mySqlPassword,

        // //MySQL：raffle
        dialect: 'mysql',
        database: 'SYCP-TEST',
        host: systemConfig.hostByME,
        port: '3306',
        username: 'root',
        password: systemConfig.mySqlPassword,
        operatorsAliases: false,

        //MySQL：MZ_CONTENT_CLOUD
        // dialect: 'mysql',
        // database: 'MZ_CONTENT_CLOUD',
        // host: systemConfig.hostByMZ,
        // port: '9909',
        // username: 'root',
        // password: systemConfig.mzContentCloud,

    };

    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: systemConfig.hostByME,
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: systemConfig.mySqlPassword,
            // 数据库名
            database: 'SYCP-TEST',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    config.mssql = {
        // 单数据库信息配置
        client: {
            // host
            server: systemConfig.hostByCP,
            // 端口号
            port: '1433',
            // 用户名
            user: 'sa',
            // 密码
            password: systemConfig.sqlServerPassword,
            // 数据库名
            database: 'SYCP-TEST',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };


    return config;
};

