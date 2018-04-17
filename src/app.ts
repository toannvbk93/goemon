import * as express from 'express';
import assign = require('object-assign');
let path = require('path');
import AppServer from './app-server';

export interface AppConfigType {
  root: string;
  port: string;
}

let app: express.Express;
let appConfig: AppConfigType;

export function init(initConfig?: AppConfigType) {
  app = express();

  if ( 'development' === app.get('env') ) {
    appConfig = {
      root: path.normalize(__dirname),
      port: process.env.PORT || '3000'
    };
  } else {
    appConfig = {
      root: path.normalize(__dirname),
      port: process.env.PORT,
    };
  }

  assign({}, appConfig, initConfig);

  AppServer.initalize(app, appConfig);

  process.on('uncaughtException', (err: any) => {
    console.log(err);
  });

  return app;
}

export function start() {
  AppServer.start();
}
