"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch = require("isomorphic-fetch");
var ProfileService = (function () {
    function ProfileService() {
    }
    ProfileService.getProfile = function (url) {
        return new Promise(function (resolve, reject) {
            console.log(ProfileService.url);
            fetch(url, {
                credentials: 'include',
            })
                .then(function (apiResult) { return apiResult.json(); })
                .then(function (json) { return resolve(json); })
                .catch(function (error) { return reject(error); });
        });
    };
    return ProfileService;
}());
exports.default = ProfileService;
//# sourceMappingURL=profile-service.js.map