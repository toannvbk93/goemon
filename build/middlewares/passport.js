"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require('passport');
var session = require('express-session');
var glob = require("glob");
var path = require('path');
module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());
    enableSessionSelialization();
    var strategiesPath = path.normalize(__dirname + '/passport/strategy');
    var auth = glob.sync(strategiesPath + '/*.+(js|ts|jsx|tsx)');
    auth.forEach(function (routes) {
        require(routes)(app);
    });
};
function enableSessionSelialization() {
    passport.serializeUser(function (user, callback) {
        callback(undefined, user);
    });
    passport.deserializeUser(function (obj, callback) {
        callback(undefined, obj);
    });
}
//# sourceMappingURL=passport.js.map