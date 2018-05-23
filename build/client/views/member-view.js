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
var Button_1 = require("material-ui/Button");
var Drawer_1 = require("material-ui/Drawer");
var AppBar_1 = require("material-ui/AppBar");
var Toolbar_1 = require("material-ui/Toolbar");
var List_1 = require("material-ui/List");
var Typography_1 = require("material-ui/Typography");
var TextField_1 = require("material-ui/TextField");
var Divider_1 = require("material-ui/Divider");
var MenuItem_1 = require("material-ui/Menu/MenuItem");
var member_menu_1 = require("./member/member-menu");
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
        return (React.createElement("div", { className: classes.root },
            React.createElement(AppBar_1.default, { position: "absolute", className: classes.appBar },
                React.createElement(Toolbar_1.default, null,
                    React.createElement(Typography_1.default, { variant: "title", className: classes.title }, "Administrator"),
                    React.createElement(Button_1.default, { className: classes.logout, href: "/member/logout" }, "Logout"))),
            React.createElement(Drawer_1.default, { variant: "permanent", classes: {
                    paper: classes.drawerPaper,
                } },
                React.createElement("div", { className: classes.toolbar }),
                React.createElement(List_1.default, null, member_menu_1.mailFolderListItems),
                React.createElement(Divider_1.default, null),
                React.createElement(List_1.default, null, member_menu_1.otherMailFolderListItems)),
            React.createElement("main", { className: classes.content },
                React.createElement("div", { className: classes.toolbar }),
                React.createElement(Typography_1.default, { noWrap: true }, 'You think water moves fast? You should see ice.'),
                React.createElement("form", { className: classes.container, noValidate: true, autoComplete: "off" },
                    React.createElement(TextField_1.default, { id: "name", label: "Name", className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: "normal" }),
                    React.createElement(TextField_1.default, { id: "uncontrolled", label: "Uncontrolled", defaultValue: "foo", className: classes.textField, margin: "normal" }),
                    React.createElement(TextField_1.default, { required: true, id: "required", label: "Required", defaultValue: "Hello World", className: classes.textField, margin: "normal" }),
                    React.createElement(TextField_1.default, { error: true, id: "error", label: "Error", defaultValue: "Hello World", className: classes.textField, margin: "normal" }),
                    React.createElement(TextField_1.default, { id: "password-input", label: "Password", className: classes.textField, type: "password", autoComplete: "current-password", margin: "normal" }),
                    React.createElement(TextField_1.default, { id: "multiline-flexible", label: "Multiline", multiline: true, rowsMax: "4", value: this.state.multiline, onChange: this.handleChange('multiline'), className: classes.textField, margin: "normal" }),
                    React.createElement(TextField_1.default, { id: "multiline-static", label: "Multiline", multiline: true, rows: "4", defaultValue: "Default Value", className: classes.textField, margin: "normal" }),
                    React.createElement(TextField_1.default, { id: "helperText", label: "Helper text", defaultValue: "Default Value", className: classes.textField, helperText: "Some important text", margin: "normal" }),
                    React.createElement(TextField_1.default, { id: "with-placeholder", label: "With placeholder", placeholder: "Placeholder", className: classes.textField, margin: "normal" }),
                    React.createElement(TextField_1.default, { id: "textarea", label: "With placeholder multiline", placeholder: "Placeholder", multiline: true, className: classes.textField, margin: "normal" }),
                    React.createElement(TextField_1.default, { id: "number", label: "Number", value: this.state.age, onChange: this.handleChange('age'), type: "number", className: classes.textField, InputLabelProps: {
                            shrink: true,
                        }, margin: "normal" }),
                    React.createElement(TextField_1.default, { id: "search", label: "Search field", type: "search", className: classes.textField, margin: "normal" }),
                    React.createElement(TextField_1.default, { id: "select-currency", select: true, label: "Select", className: classes.textField, value: this.state.currency, onChange: this.handleChange('currency'), SelectProps: {
                            MenuProps: {
                                className: classes.menu,
                            },
                        }, helperText: "Please select your currency", margin: "normal" }, currencies.map(function (option) { return (React.createElement(MenuItem_1.default, { key: option.value, value: option.value }, option.label)); })),
                    React.createElement(TextField_1.default, { id: "select-currency-native", select: true, label: "Native select", className: classes.textField, value: this.state.currency, onChange: this.handleChange('currency'), SelectProps: {
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }, helperText: "Please select your currency", margin: "normal" }, currencies.map(function (option) { return (React.createElement("option", { key: option.value, value: option.value }, option.label)); })),
                    React.createElement(TextField_1.default, { id: "full-width", label: "Label", InputLabelProps: {
                            shrink: true,
                        }, placeholder: "Placeholder", helperText: "Full width!", fullWidth: true, margin: "normal" })))));
    };
    return MemberView;
}(React.Component));
exports.default = styles_1.withStyles(member_style_1.styles)(MemberView);
//# sourceMappingURL=member-view.js.map