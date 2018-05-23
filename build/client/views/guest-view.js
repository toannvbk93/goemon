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
var styles_1 = require("material-ui/styles");
var member_style_1 = require("./member/member-style");
var currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
var MemberView = (function (_super) {
    __extends(MemberView, _super);
    function MemberView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            name: 'Cat in the Hat',
            age: '',
            multiline: 'Controlled',
            currency: 'EUR',
        };
        _this.handleChange = function (name) { return function (event) {
            _this.setState((_a = {},
                _a[name] = event.target.value,
                _a));
            var _a;
        }; };
        return _this;
    }
    MemberView.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement("h1", null, "hello Guest"));
    };
    return MemberView;
}(React.Component));
exports.default = styles_1.withStyles(member_style_1.styles)(MemberView);
//# sourceMappingURL=guest-view.js.map