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
  router.get('/wxlogin/getSessionkeyByCode', app.controller.wxlogin.getSessionkeyByCode);

};
