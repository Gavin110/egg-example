'use strict';

const Controller = require('egg').Controller;

class WxloginController extends Controller {
    async getUnionId() {
        const ctx = this.ctx;
        const userInfo = await ctx.service.wxlogin.getUnionId(ctx.query);
        this.ctx.body = userInfo;
    }
}

module.exports = WxloginController;
