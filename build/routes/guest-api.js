"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var guest_api_service_1 = require("../services/guest-api-service");
var passport = require('passport');
var router = express.Router();
var graphqlHTTP = require('express-graphql');
var buildSchema = require('graphql').buildSchema;
module.exports = function (app) {
    app.use('/api', graphqlHTTP({
        schema: guest_api_service_1.default.schema,
        rootValue: guest_api_service_1.default.rootValue,
        graphiql: true,
    }));
};
//# sourceMappingURL=guest-api.js.map