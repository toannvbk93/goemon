"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drawerWidth = 240;
exports.styles = function (theme) { return ({
    root: {
        flexGrow: 1,
        height: 1600,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    title: {
        flex: 1,
        color: '#ffffff',
    },
    logout: {
        color: '#ffffff',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        textColor: '#efefef',
        color: '#061345',
        height: 60,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
    },
    toolbar: theme.mixins.toolbar,
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
}); };
//# sourceMappingURL=member-style.js.map