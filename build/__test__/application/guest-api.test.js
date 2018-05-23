"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("../../app");
var supertest = require("supertest");
describe('/guest-api test', function () {
    var agent;
    test('/api hello()', function (done) {
        var request = supertest.agent(app.init());
        var query = {
            query: "\n        query {\n          hello,\n          plus(a: 1, b: 2)\n        }\n      "
        };
        var expected = {
            hello: 'Hello world!',
            plus: 3
        };
        request.post('/api')
            .set('Accept', 'application/json')
            .send(query)
            .then(function (res) {
            expect(res.body.data).toEqual(expected);
            done();
        })
            .catch(function (err) {
            done(err);
        });
    });
});
//# sourceMappingURL=guest-api.test.js.map