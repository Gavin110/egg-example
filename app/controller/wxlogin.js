'use strict';

const Controller = require('egg').Controller;

class WxloginController extends Controller {
    async getSessionkeyByCode() {
        const ctx = this.ctx;
        const user = await ctx.service.wxlogin.getSessonKeyByCode('0611jsdT0odUxX1VlyfT0wqbdT01jsdU');
        this.ctx.body = 'hi, wxloginSuccess';
    }
}

module.exports = WxloginController;
