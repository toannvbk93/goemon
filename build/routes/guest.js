"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var jsDate = 0;
var cssDate = 0;
router.get('/', function (req, res, next) {
    res.render('guest');
});
module.exports = function (app) {
    app.use('/', router);
};
//# sourceMappingURL=guest.js.map