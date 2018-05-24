import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
const fetch = require('node-fetch');

import ToannvApp from '../client/apps/toannv-app';

let router = express.Router();

module.exports = function (app: express.Express) {
  app.use('/toannv', router);
};

router.get('/', renderHandler);

function renderHandler(req, res, next) {
    const initialProps: any = '';
    const markup = renderToString(<ToannvApp { ...initialProps } />);
    res.render('home', {
      title: 'Toannv simple',
      markup: markup,
      initialState: JSON.stringify(initialProps)
    });
}
