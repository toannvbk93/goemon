"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildSchema = require('graphql').buildSchema;
var HelloService = (function () {
    function HelloService() {
    }
    Object.defineProperty(HelloService.prototype, "schema", {
        get: function () {
            return buildSchema("\n        type Query {\n          hello: String,\n          rollDice(numDice: Int!, numSides: Int): [Int],\n          hoge(value: String): String,\n          plus(a: Int, b: Int): Int\n        }\n      ");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelloService.prototype, "rootValue", {
        get: function () {
            return {
                hello: this.hello,
                rollDice: this.rollDice,
                hoge: this.hoge,
                plus: this.plus
            };
        },
        enumerable: true,
        configurable: true
    });
    HelloService.prototype.hello = function () {
        var result = 'Hello world!';
        return result;
    };
    HelloService.prototype.rollDice = function (_a) {
        var numDice = _a.numDice, numSides = _a.numSides;
        var output = [];
        for (var i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)));
        }
        return output;
    };
    HelloService.prototype.hoge = function (_a) {
        var value = _a.value;
        var result = 'Hoge world!' + value;
        return result;
    };
    HelloService.prototype.plus = function (_a) {
        var a = _a.a, b = _a.b;
        return a + b;
    };
    return HelloService;
}());
exports.default = new HelloService();
//# sourceMappingURL=member-api-service.js.map