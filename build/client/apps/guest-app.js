"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_config_1 = require("react-router-config");
var styles_1 = require("material-ui/styles");
var guest_view_1 = require("../views/guest-view");
var notfound_1 = require("../views/components/notfound");
var colors_1 = require("material-ui/colors");
exports.routes = [
    {
        path: '/',
        component: guest_view_1.default,
        exact: true
    }, {
        path: '/*',
        component: notfound_1.NotFound
    }
];
exports.theme = styles_1.createMuiTheme({
    palette: {
        primary: colors_1.lightBlue,
        grey: colors_1.red,
        type: 'light'
    }
});
var GuestApp = (function (_super) {
    __extends(GuestApp, _super);
    function GuestApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuestApp.prototype.componentDidMount = function () {
        var jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    };
    GuestApp.prototype.render = function () {
        return (react_router_config_1.renderRoutes(exports.routes));
    };
    return GuestApp;
}(React.Component));
exports.GuestApp = GuestApp;
//# sourceMappingURL=guest-app.js.map