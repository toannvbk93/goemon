"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var config = require("config");
var glob = require('glob');
var path = require('path');
module.exports = function (app) {
    var connectionString = config.get('dbConfig').connectionString;
    mongoose.connect(connectionString);
    var strategiesPath = path.normalize(__dirname + '/mongodb/data');
    var auth = glob.sync(strategiesPath + '/*.(ts|js)');
    auth.forEach(function (routes) {
        require(routes)(app);
    });
};
process.on('SIGINT', function () { mongoose.disconnect(); });
//# sourceMappingURL=mongodb.js.map