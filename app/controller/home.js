'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        console.log('abc' && "ABC");
        const ctx = this.ctx;
        console.log("ctx.model.BdUserPerinfo:::::",ctx.model.BdUserPerinfo);
        const ceshiObj = await ctx.model.BdUserPerinfo.findAll({
            attributes: [ 'UserID', 'UserName' ]
        });
        ctx.body = ceshiObj;
        //this.ctx.body = 'hi, lgyhuaihuai';
    }

    async haha() {
        this.ctx.body = 'hi, hah';
    }
}

module.exports = HomeController;
