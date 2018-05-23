"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var PassportUtility = (function () {
    function PassportUtility() {
    }
    PassportUtility.prototype.getUserId = function (req) {
        return req.session.passport.user.userid;
    };
    PassportUtility.prototype.getUserName = function (req) {
        return req.session.passport.user.name;
    };
    PassportUtility.prototype.getHash = function (target) {
        var sha512 = crypto.createHash('sha512');
        sha512.update(target);
        return sha512.digest('hex');
    };
    return PassportUtility;
}());
exports.default = new PassportUtility();
//# sourceMappingURL=passport-utility.js.map