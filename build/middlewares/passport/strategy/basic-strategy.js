"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../../../services/user-service");
var passport_utility_1 = require("../passport-utility");
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
module.exports = function (app) {
    enableBasicStrategy();
};
function enableBasicStrategy() {
    passport.use(new BasicStrategy(function (userid, password, done) {
        user_service_1.default.authenticate(userid, passport_utility_1.default.getHash(password), function (result) {
            if (result) {
                user_service_1.default.findById(userid, function (user) {
                    return done(undefined, user);
                });
            }
            else {
                return done('error', undefined);
            }
        });
    }));
}
//# sourceMappingURL=basic-strategy.js.map