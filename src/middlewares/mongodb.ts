import * as express from 'express';
import mongoose = require('mongoose');
import config = require('config');
let glob = require('glob');
let path = require('path');

module.exports = (app: express.Express) => {
  let connectionString = config.get<{connectionString}>('dbConfig').connectionString;
  mongoose.connect( connectionString );

  // Load modules
  let strategiesPath = path.normalize(__dirname + '/mongodb/data');
  let auth = glob.sync(strategiesPath + '/*.(ts|js)');
  auth.forEach(function (routes) {
    require(routes)(app);
  });
};

process.on('SIGINT', function() { mongoose.disconnect(); });
