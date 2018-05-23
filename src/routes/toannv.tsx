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

  let host =  req.headers.host;
  let url = 'http://' + host + '/api/items';

  getItems(url, (items) => {
    const initialProps = { items };
    const markup = renderToString(<ToannvApp { ...initialProps } />);

    res.render('home', {
      title: 'Toannv simple',
      markup: markup,
      initialState: JSON.stringify(initialProps)
    });
  });
}

function getItems(url, callback) {
  fetch(url)
  .then(apiResult => apiResult.json())
  .then(items => {
    callback(items);
  }).catch(error => {
    console.log(error);
    throw error;
  });
}
