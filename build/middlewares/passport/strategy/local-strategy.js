"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../../../services/user-service");
var passport_utility_1 = require("../passport-utility");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
module.exports = function (app) {
    enableLocalStrategy();
};
function enableLocalStrategy() {
    passport.use(new LocalStrategy({
        usernameField: 'userid',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, userid, password, done) {
        user_service_1.default.authenticate(userid, passport_utility_1.default.getHash(password), function (result) {
            if (result) {
                user_service_1.default.findById(userid, function (user) {
                    return done(undefined, user);
                });
            }
            else {
                return done(undefined, false, { message: 'Failed to login.' });
            }
        });
    }));
}
//# sourceMappingURL=local-strategy.js.map