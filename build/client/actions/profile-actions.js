"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = require("redux-actions");
var profile_service_1 = require("../services/profile-service");
exports.LOAD_PROFILE = 'LOAD_PROFILE';
exports.UPDATE_FETCH_STATUS = 'UPDATE_FETCH_STATUS';
exports.updateFetchStatus = redux_actions_1.createAction(exports.UPDATE_FETCH_STATUS);
exports.loadProfile = redux_actions_1.createAction(exports.LOAD_PROFILE, profile_service_1.default.getProfile);
//# sourceMappingURL=profile-actions.js.map