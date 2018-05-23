"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var promiseMiddleware = require('redux-promise');
var ProfileReducer = require("./profile-reducer");
exports.rootReducer = redux_1.combineReducers({
    profileState: ProfileReducer.reducer
});
exports.InitialState = {
    profileState: ProfileReducer.initialState
};
exports.configureStore = function (initialState) {
    if (initialState === void 0) { initialState = exports.InitialState; }
    return redux_1.createStore(exports.rootReducer, initialState, redux_1.applyMiddleware(promiseMiddleware));
};
//# sourceMappingURL=configure-store.js.map