'use strict';

const Controller = require('egg').Controller;
const xlsx = require('node-xlsx');
const fs = require('fs');

class HomeController extends Controller {
    async index() {
        //数据库操作
        const ctx = this.ctx;
        // {
        //     attributes: [ 'UserID', 'UserName' ]
        // }
        const ceshiObj = await ctx.model.BdUserPerinfo.findAll();
        ctx.body = ceshiObj;
    }

    async haha() {
        //手机号码抽奖表
        //读取Excel文件,并且入库相关数据
        // var sheets = xlsx.parse('D:/raffle.xls');//获取到所有sheets
        // var peoList = [];
        // var peoObj = {};
        // sheets.forEach(function (sheet) {
        //     for (var rowId in sheet['data']) {
        //         if (rowId > 0) {
        //             var row = sheet['data'][rowId];
        //             console.log(row);
        //             peoObj = {
        //                 NAME: row[1],
        //                 TELNUMBER: row[2],
        //                 SELE: '0'
        //             };
        //             peoList.push(peoObj);
        //         }
        //     }
        // });

        // 对象数组去重的方法
        // var obj = {};
        // peoList = peoList.reduce(function (item, next) {
        //     obj[next.TELNUMBER] ? '' : obj[next.TELNUMBER] = true && item.push(next);
        //     return item;
        // }, []);
        //
        // await this.ctx.model.TDRAW.bulkCreate(peoList);


        //品牌抽奖表
        // var sheets = xlsx.parse('D:/raffle_brand.xlsx');//获取到所有sheets
        // var peoList = [];
        // var peoObj = {};
        // sheets.forEach(function (sheet) {
        //     for (var rowId in sheet['data']) {
        //         if (rowId > 0) {
        //             var row = sheet['data'][rowId];
        //             console.log(row);
        //             peoObj = {
        //                 BRAND: row[1],
        //                 SELE: '0'
        //             };
        //             peoList.push(peoObj);
        //         }
        //     }
        // });
        //
        // // 对象数组去重的方法
        // var obj = {};
        // peoList = peoList.reduce(function (item, next) {
        //     obj[next.BRAND] ? '' : obj[next.BRAND] = true && item.push(next);
        //     return item;
        // }, []);
        //
        // await this.ctx.model.TDRAWBRAND.bulkCreate(peoList);


        //读取普通文本
        // fs.readFile('D:/sample.txt', 'utf-8', function (err, data) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(data);
        //     }
        // });
        this.ctx.body = 'hi, hah';
    }
}

module.exports = HomeController;
