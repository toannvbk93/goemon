"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign = require("object-assign");
var Actions = require("../actions/profile-actions");
exports.initialState = {
    profile: {
        userid: '',
        username: ''
    },
    isFetching: false
};
var reducers = (_a = {},
    _a[Actions.LOAD_PROFILE] = function (state, action) {
        if (action.error) {
            return {
                message: action.payload.message,
                isFetching: false
            };
        }
        return {
            profile: action.payload,
            isFetching: false
        };
    },
    _a[Actions.UPDATE_FETCH_STATUS] = function (state, action) { return ({
        isFetching: action.payload
    }); },
    _a);
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    if (reducers[action.type] != undefined) {
        return assign({}, state, reducers[action.type](state, action));
    }
    return state;
}
exports.reducer = reducer;
var _a;
//# sourceMappingURL=profile-reducer.js.map