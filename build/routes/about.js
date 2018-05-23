"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pjson = require('../../package.json');
var router = express_1.Router();
module.exports = function (app) {
    app.use('/about', router);
};
router.get('/', function (req, res, next) {
    res.header('Cache-Control', 'public, max-age=60000');
    res.render('about', {
        version: pjson.version
    });
});
//# sourceMappingURL=about.js.map