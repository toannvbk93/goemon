import * as express from 'express';
import GuestApiService from '../services/guest-api-service';
let passport = require('passport');

let router = express.Router();
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');

module.exports = function (app) {
  app.use('/api', graphqlHTTP({
    schema: GuestApiService.schema,
    rootValue: GuestApiService.rootValue,
    graphiql: true,
  }));
};
