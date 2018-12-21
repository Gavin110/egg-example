'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('haha','/home/haha', controller.home.haha);
  router.get('/search', app.controller.search.index);
  router.get('/user/info', app.controller.user.info);
  router.get('/wxpay', app.controller.wxpay.index);
  router.get('/products/findAll', app.controller.products.findAll);
  // /:selfParams
  router.get('/wxlogin/getUnionId', app.controller.wxlogin.getUnionId);

};
