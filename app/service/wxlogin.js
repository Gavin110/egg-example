// app/service/user.js
const Service = require('egg').Service;
const qs = require('querystring');
const utils = require('../../utils/utils');
const systemConfig = require('../../utils/config');
class WxloginService extends Service {
    async getSessonKeyByCode(js_code) {
        const ctx = this.ctx;
        const APPID = systemConfig.wxAppId;
        const SECRET = systemConfig.wxSecret;
        let reqUrl = 'https://api.weixin.qq.com/sns/jscode2session?';
        //let reqUrl = 'https://api.weixin.qq.com/sns/jscode2session';
        let params = {
            appid: APPID,
            secret: SECRET,
            js_code: js_code,
            grant_type: 'authorization_code'
        };

        let options = {
            method: 'get',
            url: reqUrl + qs.stringify(params)
        };


        // const result = await ctx.curl(reqUrl,{
        //     dataType: 'text',
        //     method: 'GET',
        //     data: params,
        //     contentType: 'json',
        // });
        //
        // console.log("result:::::",result);



        let result = await utils.getDatas(options);
        console.log("result::::",result);


    };
    async find() {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        //const user = await this.app.mssql.query('SELECT * FROM BD_User_Perinfo where UserID = \'Per2017920165228474\';');
        const user = await this.app.mysql.get('BD_User_Perinfo', { UserID: 'Per2017920165228474' });
        return { user };
    }
}

module.exports = WxloginService;