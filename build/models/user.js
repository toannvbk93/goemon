"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passport_utility_1 = require("../middlewares/passport/passport-utility");
function createModel() {
    var userSchema = new Schema({
        email: { type: String, index: true, unique: true },
        password: { type: String, index: true, required: true },
        validation: {
            emailVerified: { type: Boolean, default: false },
            emailConfirmKey: String
        },
        profile: {
            image: { data: Buffer, contentType: String },
            firstName: String,
            middleName: String,
            lastName: String,
            birthDay: Date
        },
        createDate: { type: Date, default: new Date() },
        updateDate: { type: Date, default: new Date() }
    });
    var User = mongoose.model('User', userSchema);
    return User;
}
exports.User = createModel();
var UserModel = (function () {
    function UserModel() {
    }
    UserModel.authenticate = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                exports.User.findOne({ email: email }).exec().then(function (user) {
                    var hash = passport_utility_1.default.getHash(password.toString());
                    if (user != null && (user.password === hash)) {
                        return user;
                    }
                    else {
                        throw new Error('ID or Password is incollect.');
                    }
                }).catch(function (error) {
                    throw new Error(error);
                });
                throw new Error('ID or Password is incollect.');
            });
        });
    };
    UserModel.createUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            var user = new exports.User();
            user.email = email;
            user.password = passport_utility_1.default.getHash(password.toString());
            user.profile.firstName = '-';
            user.profile.lastName = '-';
            user.save().then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    UserModel.isUserExist = function (email) {
        return new Promise(function (resolve, reject) {
            exports.User.findOne({ email: email }).count().then(function (res) {
                if (res > 0) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    return UserModel;
}());
exports.User.authenticate = UserModel.authenticate;
exports.User.createUser = UserModel.createUser;
exports.User.isUserExist = UserModel.isUserExist;
//# sourceMappingURL=user.js.map