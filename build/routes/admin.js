"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var express_1 = require("express");
var react_router_config_1 = require("react-router-config");
var passport_utility_1 = require("../middlewares/passport/passport-utility");
var configure_store_1 = require("../client/stores/configure-store");
var material_ui_app_creator_1 = require("../client/base/react/material-ui-app-creator");
var member_app_1 = require("../client/apps/member-app");
var passport = require('passport');
var router = express_1.Router();
var jsDate = 0;
module.exports = function (app) {
    app.use('/admin', router);
};
router.get('/login', function (req, res, next) {
    res.render('login', { message: req.flash('error') });
});
router.post('/login', passport.authenticate('local', { successRedirect: '/member', failureRedirect: '/member/login', failureFlash: true }));
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/member');
});
router.get('*', isAuthenticated, function (req, res) {
    var context = {};
    var protocol = req.protocol;
    var host = req.headers.host;
    var store = configure_store_1.configureStore();
    var preloadedState = store.getState();
    var branch = react_router_config_1.matchRoutes(member_app_1.routes, req.baseUrl + req.url);
    var promises = branch.map(function (_a) {
        var route = _a.route;
        var getInitialProps = route.component.getInitialProps;
        return getInitialProps instanceof Function ? getInitialProps(store, protocol, host) : Promise.resolve(undefined);
    });
    return Promise.all(promises).then(function (data) {
        var context = {};
        var contents = material_ui_app_creator_1.renderOnServer(React.createElement(member_app_1.MemberApp, null), member_app_1.theme, req, context, store);
        if (context.status === 404) {
            res.status(404);
        }
        else if (context.status === 302) {
            return res.redirect(302, context.url);
        }
        res.render('admin', {
            userid: passport_utility_1.default.getUserId(req),
            title: 'システム管理者画面',
            html: contents.html,
            css: contents.css,
            initialState: JSON.stringify(store.getState()),
            jsDate: jsDate
        });
    });
});
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/member/login');
}
//# sourceMappingURL=admin.js.map