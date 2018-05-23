"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var assign = require("object-assign");
var path = require('path');
var app_server_1 = require("app-server");
var app;
var appConfig;
function init(initConfig) {
    app = express();
    if ('development' === app.get('env')) {
        appConfig = {
            root: path.normalize(__dirname),
            port: process.env.PORT || '3000'
        };
    }
    else {
        appConfig = {
            root: path.normalize(__dirname),
            port: process.env.PORT,
        };
    }
    assign({}, appConfig, initConfig);
    app_server_1.default.initalize(app, appConfig);
    process.on('uncaughtException', function (err) {
        console.log(err);
    });
    return app;
}
exports.init = init;
function start() {
    app_server_1.default.start();
}
exports.start = start;
//# sourceMappingURL=app.js.map