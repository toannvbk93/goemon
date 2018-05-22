import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
const fetch = require('node-fetch');

import SimpleApp from '../client/apps/simple-app';
import ToannvApp from '../client/apps/toannv-app';

let router = express.Router();

module.exports = function (app: express.Express) {
  app.use('/toannv', router);
};

router.get('/', renderHandler);

function renderHandler(req, res, next) {
    const markup = renderToString(<ToannvApp />);
    res.render('home', {
      title: 'Home page toannv',
      markup: markup,
  });
}
