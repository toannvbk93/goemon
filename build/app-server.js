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
var express = require("express");
var session = require("express-session");
var config = require("config");
var domain = require('domain');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var expressValidator = require('express-validator');
var glob = require('glob');
var flash = require('connect-flash');
var AppServer = (function () {
    function AppServer() {
    }
    AppServer.prototype.initalize = function (app, appConfig) {
        this.app = app;
        this.appConfig = appConfig;
        app.set('views', path.join(appConfig.root, 'views'));
        app.set('view engine', 'ejs');
        app.use(expressValidator());
        app.use(favicon(path.join(appConfig.root, '.', 'public', 'favicon.ico')));
        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(session({
            secret: config.get('session.secret'),
            resave: config.get('session.resave'),
            saveUninitialized: config.get('session.saveUninitialized'),
            cookie: { maxAge: config.get('session.cookie.maxAge') }
        }));
        var cacheTime = 10000;
        app.use(express.static(path.join(appConfig.root, '.', 'public'), {
            maxAge: cacheTime,
            lastModified: true,
            redirect: true
        }));
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());
        var middlewares = glob.sync(__dirname + '/middlewares/*.+(js|jsx|ts|tsx)');
        middlewares.forEach(function (middleware) {
            console.log('Loading middleware : ' + middleware);
            require(middleware)(app);
        });
        var routes = glob.sync(__dirname + '/routes/*.+(js|jsx|ts|tsx)');
        routes.forEach(function (route) {
            console.log('Loading route : ' + route);
            require(route)(app);
        });
        app.use(function (req, res, next) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        });
        if (app.get('env') === 'development') {
            app.use(function (err, req, res, next) {
                res.status(err.status || 500);
                res.render('error', {
                    message: err.message,
                    error: err
                });
            });
        }
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });
    };
    AppServer.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.app.listen(this.appConfig.port, function () {
                    return ('Express server listening on port ' + _this.appConfig.port);
                });
                return [2];
            });
        });
    };
    return AppServer;
}());
exports.default = new AppServer();
//# sourceMappingURL=app-server.js.map