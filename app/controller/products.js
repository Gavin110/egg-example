
const Controller = require('egg').Controller;
class ProductsController extends Controller {
    async findAll() {
        const ctx = this.ctx;
        // const userId = ctx.params.id;
        const products = await ctx.service.products.findAll();
        ctx.body = products;
    }
}

module.exports = ProductsController
