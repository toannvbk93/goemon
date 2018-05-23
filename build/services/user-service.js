"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport_utility_1 = require("../middlewares/passport/passport-utility");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.isUserExist = function (userid, callback) {
        callback(true);
    };
    UserService.prototype.isValidUser = function (userId, callback) {
        callback(true);
    };
    UserService.prototype.authenticate = function (userId, password, callback) {
        if (userId == 'test@example.com' && password == passport_utility_1.default.getHash('test')) {
            callback(true);
        }
        else {
            callback(false);
        }
    };
    UserService.prototype.findById = function (userId, callback) {
        callback({
            id: 1,
            userid: 'test@example.com',
            username: 'Test User'
        });
    };
    return UserService;
}());
exports.default = new UserService();
//# sourceMappingURL=user-service.js.map