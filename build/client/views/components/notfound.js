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
var react_router_dom_1 = require("react-router-dom");
var NotFound = (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFound.prototype.render = function () {
        return (React.createElement(react_router_dom_1.Route, { render: function (_a) {
                var staticContext = _a.staticContext;
                if (staticContext) {
                    staticContext.status = 404;
                }
                return (React.createElement("div", null,
                    React.createElement("h1", null, "404 : Not Found")));
            } }));
    };
    return NotFound;
}(React.Component));
exports.NotFound = NotFound;
//# sourceMappingURL=notfound.js.map