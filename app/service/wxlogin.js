// app/service/user.js
const Service = require('egg').Service;
const qs = require('querystring');
const utils = require('../../utils/utils');
const systemConfig = require('../../utils/config');
let WXBizDataCrypt = require('../../utils/WXBizDataCrypt');

class WxloginService extends Service {


   async getUnionId(selfParams) {
        const ctx = this.ctx;
        const APPID = systemConfig.wxAppId;
        const SECRET = systemConfig.wxSecret;
        let reqUrl = 'https://api.weixin.qq.com/sns/jscode2session';
        let params = {
            appid: APPID,
            secret: SECRET,
            js_code: selfParams.js_code,
            grant_type: 'authorization_code',
        };
        let {encryptedData, iv} = selfParams;

        const result = await ctx.curl(reqUrl,{
            dataType: 'json',
            method: 'GET',
            data: params,
            // contentType: 'json',
        });
        let sessionKey = result.res.data['session_key'];
        let wxBizData = new WXBizDataCrypt(APPID,sessionKey);
        let userInfo = wxBizData.decryptData(encryptedData,iv);
        return userInfo;

    };

    async find() {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        //const user = await this.app.mssql.query('SELECT * FROM BD_User_Perinfo where UserID = \'Per2017920165228474\';');
        const user = await this.app.mysql.get('BD_User_Perinfo', {UserID: 'Per2017920165228474'});
        return {user};
    };

}

module.exports = WxloginService;