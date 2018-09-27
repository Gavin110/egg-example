// app/service/user.js
const Service = require('egg').Service;
class UserService extends Service {
    async find() {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        //const user = await this.app.mssql.query('SELECT * FROM BD_User_Perinfo where UserID = \'Per2017920165228474\';');
        const user = await this.app.mysql.get('BD_User_Perinfo', { UserID: 'Per2017920165228474' });
        return { user };
    }
}

module.exports = UserService;