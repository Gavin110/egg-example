'use strict';

var xmlreader = require("xmlreader");
const Controller = require('egg').Controller;
const wxpay = require('../../utils/wxPay');

var appid     = 'wx10b994dc6318edc4';
var appsecret = 'ae5aac387f4dc8be25c25f019692b811';
var mchid     = '1519045471'
var mchkey    = 'dehoichsjeiaol38jdn1n385910dn18H';
var wxurl     = 'http://XXXXXXXXX/weixinNotify.action';

class WxpayController extends Controller {
  async index() {
    //数据库操作
    const ctx = this.ctx;
    ctx.body = 'wxpay';
  }
}

module.exports = WxpayController;
