'use strict';
const request = require('request');
module.exports = {
    getDatas: function(options) {
        return new Promise((resolve, reject) => {
            request(options, function (err, res, body) {
                if (res) {
                    resolve(body);
                } else {
                    reject(err);
                }
            });
        },function(res){
            return res;
        },function(err){
            return err;
        });
    },
};

