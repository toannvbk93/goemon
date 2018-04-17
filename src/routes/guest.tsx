import * as fs from 'fs';
import * as assign from 'object-assign';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import * as Redux from 'redux';
import { Express, Router } from 'express';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { matchPath } from 'react-router-dom';

import { configureStore, IStore } from '../client/stores/configure-store';
import { renderOnServer } from '../client/base/react/material-ui-app-creator';
import { GuestApp, routes, theme } from '../client/apps/guest-app';

let router = Router();
let jsDate: number = 0;
let cssDate: number = 0;

router.get('/', function (req, res, next) {
  res.render('guest');
});

module.exports = function (app: Express) {
  app.use('/', router);
};

// module.exports = function (app: Express) {
//   app.use('/', router);
// };

// module.exports = function (app: Express) {
//   app.use('/', router);

//   let path = require('path');
//   let rootPath = path.normalize(__dirname + '/..');

//   // Calc js modify date
//   let jsStats = fs.statSync(rootPath + '/public/js/guest.js');
//   jsDate = jsStats.mtime.getFullYear() + jsStats.mtime.getMonth() + jsStats.mtime.getDay() + jsStats.mtime.getTime();
// };

// router.get('*', (req, res) => {
//   let context: any = {};

//   const store = configureStore();
//   const preloadedState = store.getState();
//   const branch = matchRoutes(routes, req.baseUrl + req.url);
//   const protocol = req.protocol;
//   let host = req.headers.host;
//   const promises = branch.map(({route}) => {
//     let getInitialProps = route.component.getInitialProps;
//     return getInitialProps instanceof Function ? getInitialProps(store, protocol, host) : Promise.resolve(undefined);
//   });
//   return Promise.all(promises).then((data) => {
//     // render on server side
//     let context: any = {};

//     let contents = renderOnServer(<GuestApp />, theme, req, context, store);

//     if ( context.status === 404) {
//       res.status(404);
//     } else if (context.status === 302) {
//       return res.redirect(302, context.url);
//     }

//     res.render('guest', {
//       html: contents.html,
//       css: contents.css,
//       initialState: JSON.stringify(store.getState()),
//       jsDate: jsDate
//     });
//   });
// });
