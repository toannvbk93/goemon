"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var server_1 = require("react-dom/server");
var jss_1 = require("react-jss/lib/jss");
var JssProvider_1 = require("react-jss/lib/JssProvider");
var styles_1 = require("material-ui/styles");
function createClientApp(componant, theme, store) {
    var sheetsRegistry = new jss_1.SheetsRegistry();
    var generateClassName = styles_1.createGenerateClassName();
    return (React.createElement(JssProvider_1.default, { registry: sheetsRegistry, generateClassName: generateClassName },
        React.createElement(styles_1.MuiThemeProvider, { theme: theme },
            React.createElement(react_redux_1.Provider, { store: store },
                React.createElement(react_router_dom_1.BrowserRouter, null, componant)))));
}
exports.createClientApp = createClientApp;
function renderOnServer(componant, theme, req, context, store) {
    var sheetsRegistry = new jss_1.SheetsRegistry();
    var generateClassName = styles_1.createGenerateClassName();
    var html = server_1.renderToString(React.createElement(JssProvider_1.default, { registry: sheetsRegistry, generateClassName: generateClassName },
        React.createElement(styles_1.MuiThemeProvider, { theme: theme, sheetsManager: new Map() },
            React.createElement(react_redux_1.Provider, { store: store },
                React.createElement(react_router_dom_1.StaticRouter, { location: req.baseUrl + req.url, context: context }, componant)))));
    var css = sheetsRegistry.toString();
    return {
        html: html,
        css: css
    };
}
exports.renderOnServer = renderOnServer;
//# sourceMappingURL=material-ui-app-creator.js.map