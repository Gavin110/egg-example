// app/service/user.js
const Service = require('egg').Service;
class productsService extends Service {
    async findAll() {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        //const user = await this.app.mssql.query('SELECT * FROM BD_User_Perinfo where UserID = \'Per2017920165228474\';');
        //const products = await this.app.mysql.select('bd_pro');
        const products = await this.app.model.BdPro.findAll();
        return { products };
    }
}

module.exports = productsService;
