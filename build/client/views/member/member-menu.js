"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("material-ui/List");
var MoveToInbox_1 = require("@material-ui/icons/MoveToInbox");
var Drafts_1 = require("@material-ui/icons/Drafts");
var Star_1 = require("@material-ui/icons/Star");
var Send_1 = require("@material-ui/icons/Send");
var Mail_1 = require("@material-ui/icons/Mail");
var Delete_1 = require("@material-ui/icons/Delete");
var Report_1 = require("@material-ui/icons/Report");
exports.mailFolderListItems = (React.createElement("div", null,
    React.createElement(List_1.ListItem, { button: true },
        React.createElement(List_1.ListItemIcon, null,
            React.createElement(MoveToInbox_1.default, null)),
        React.createElement(List_1.ListItemText, { primary: "Upload" })),
    React.createElement(List_1.ListItem, { button: true },
        React.createElement(List_1.ListItemIcon, null,
            React.createElement(Star_1.default, null)),
        React.createElement(List_1.ListItemText, { primary: "Starred" })),
    React.createElement(List_1.ListItem, { button: true },
        React.createElement(List_1.ListItemIcon, null,
            React.createElement(Send_1.default, null)),
        React.createElement(List_1.ListItemText, { primary: "Send mail" })),
    React.createElement(List_1.ListItem, { button: true },
        React.createElement(List_1.ListItemIcon, null,
            React.createElement(Drafts_1.default, null)),
        React.createElement(List_1.ListItemText, { primary: "Drafts" }))));
exports.otherMailFolderListItems = (React.createElement("div", null,
    React.createElement(List_1.ListItem, { button: true },
        React.createElement(List_1.ListItemIcon, null,
            React.createElement(Mail_1.default, null)),
        React.createElement(List_1.ListItemText, { primary: "All mail" })),
    React.createElement(List_1.ListItem, { button: true },
        React.createElement(List_1.ListItemIcon, null,
            React.createElement(Delete_1.default, null)),
        React.createElement(List_1.ListItemText, { primary: "Trash" })),
    React.createElement(List_1.ListItem, { button: true },
        React.createElement(List_1.ListItemIcon, null,
            React.createElement(Report_1.default, null)),
        React.createElement(List_1.ListItemText, { primary: "Spam" }))));
//# sourceMappingURL=member-menu.js.map