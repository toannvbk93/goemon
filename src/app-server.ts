import * as express from 'express';
import * as session from 'express-session';

import { ConfigType } from './config/config';
const domain = require('domain');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const expressValidator = require('express-validator');
const glob = require('glob');
const flash = require('connect-flash');

class AppServer {

  public app: any; //express app
  public config: ConfigType;

  constructor() {
  }

  // start express application
  public initalize(app: any, config: ConfigType) {
    this.app = app;
    this.config = config;

    // view engine setup
    app.set('views', path.join(config.root, 'views'));
    app.set('view engine', 'ejs');

    // validator
    app.use(expressValidator());

    // favicon
    app.use(favicon(path.join(config.root, '.', 'public', 'favicon.ico'))); // uncomment after placing your favicon in /public

    // logger
    app.use(logger('dev'));

    // bodyParser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // cookieParser
    app.use(cookieParser());

    // session
    app.use(session({
      secret: config.session.secret,
      resave: config.session.resave,
      saveUninitialized: config.session.saveUninitialized,
      cookie: { maxAge: config.session.cookie.maxAge }
    }));

    // public folder path
    const cacheTime = 10000;     // 10s
    app.use(express.static(path.join(config.root, '.', 'public'), {
      maxAge: cacheTime,
      lastModified: true,
      redirect: true }
      ));

    // Sample cache of extension match
    // app.use(function (req, res, next) {
    //     if (req.url.match(/^\/(css|js|img|font)\/.+/)) {
    //         res.setHeader('Cache-Control', 'public, max-age=3600');
    //     }
    //     next();
    // });

    // Initialize connect-flash
    app.use(flash());

    app.use(passport.initialize());
    app.use(passport.session());

    // Setup auth
    let auth = glob.sync(config.root + '/middlewares/*.+(js|ts|jsx|tsx)');
    auth.forEach(function (routes) {
      require(routes)(app);
    });

    // require(__dirname + '/middlewares/passport')(app);

    // Setup routes
    let routes = glob.sync(__dirname + '/routes/*.+(js|ts|jsx|tsx)');
      routes.forEach(function (routes) {
        require(routes)(app);
      });

    // require(__dirname + '/routes/about')(app);
    // require(__dirname + '/routes/api')(app);
    // require(__dirname + '/routes/hello')(app);
    // require(__dirname + '/routes/index')(app);
    // require(__dirname + '/routes/material')(app);
    // require(__dirname + '/routes/member')(app);
    // require(__dirname + '/routes/redux')(app);
    // require(__dirname + '/routes/simple')(app);

    // catch 404 and forward to error handler
    app.use((req: any, res: any, next: any) => {
      let err: any = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
      app.use((err: any, req: any, res: any, next: any) => {
        res.status(err.status || 500);
        res.render('error', {
        message: err.message,
        error: err
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use((err: any, req: any, res: any, next: any) => {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });
  }

  public async start() {
    this.app.listen(this.config.port, () => {
      return ('Express server listening on port ' + this.config.port);
    });
  }
}

export default new AppServer();
