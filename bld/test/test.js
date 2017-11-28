"use strict";
// tslint:disable:no-unused-expression
// tslint:disable:no-implicit-dependencies
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Sinon = require("sinon");
var __1 = require("..");
describe('memorize', function () {
    context('exports', function () {
        it('should export default', function () {
            __1.default.should.equal(__1.memorize);
        });
    });
    context('getters and methods', function () {
        it('should handle getters', function () {
            var spy = Sinon.spy(function () { return 123; });
            var Foo = /** @class */ (function () {
                function Foo() {
                }
                Object.defineProperty(Foo.prototype, "property", {
                    get: function () {
                        return spy();
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    __1.default()
                ], Foo.prototype, "property", null);
                return Foo;
            }());
            var foo = new Foo();
            spy.called.should.be.false;
            foo.property.should.equal(123);
            spy.calledOnce.should.be.true;
            foo.property.should.equal(123);
            spy.calledOnce.should.be.true;
        });
        it('should handle static getters', function () {
            var spy = Sinon.spy(function () { return 123; });
            var Foo = /** @class */ (function () {
                function Foo() {
                }
                Object.defineProperty(Foo, "property", {
                    get: function () {
                        return spy();
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    __1.default()
                ], Foo, "property", null);
                return Foo;
            }());
            spy.called.should.be.false;
            Foo.property.should.equal(123);
            spy.calledOnce.should.be.true;
            Foo.property.should.equal(123);
            spy.calledOnce.should.be.true;
        });
        it('should handle methods', function () {
            var spy = Sinon.spy(function () { return 123; });
            var Foo = /** @class */ (function () {
                function Foo() {
                }
                Foo.prototype.method = function () {
                    return spy();
                };
                __decorate([
                    __1.default()
                ], Foo.prototype, "method", null);
                return Foo;
            }());
            var foo = new Foo();
            spy.called.should.be.false;
            foo.method().should.equal(123);
            spy.calledOnce.should.be.true;
            foo.method().should.equal(123);
            spy.calledOnce.should.be.true;
        });
        it('should handle static methods', function () {
            var spy = Sinon.spy(function () { return 123; });
            var Foo = /** @class */ (function () {
                function Foo() {
                }
                Foo.method = function () {
                    return spy();
                };
                __decorate([
                    __1.default()
                ], Foo, "method", null);
                return Foo;
            }());
            spy.called.should.be.false;
            Foo.method().should.equal(123);
            spy.calledOnce.should.be.true;
            Foo.method().should.equal(123);
            spy.calledOnce.should.be.true;
        });
        it('should handle ttl', function () { return __awaiter(_this, void 0, void 0, function () {
            var spy, Foo, foo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spy = Sinon.spy(function () { return 123; });
                        Foo = /** @class */ (function () {
                            function Foo() {
                            }
                            Object.defineProperty(Foo.prototype, "property", {
                                get: function () {
                                    return spy();
                                },
                                enumerable: true,
                                configurable: true
                            });
                            __decorate([
                                __1.default({ ttl: 0 })
                            ], Foo.prototype, "property", null);
                            return Foo;
                        }());
                        foo = new Foo();
                        spy.called.should.be.false;
                        foo.property.should.equal(123);
                        spy.calledOnce.should.be.true;
                        foo.property.should.equal(123);
                        spy.calledOnce.should.be.true;
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10); })];
                    case 1:
                        _a.sent();
                        foo.property.should.equal(123);
                        spy.calledTwice.should.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle ttl being false', function () { return __awaiter(_this, void 0, void 0, function () {
            var spy, Foo, foo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spy = Sinon.spy(function () { return 123; });
                        Foo = /** @class */ (function () {
                            function Foo() {
                            }
                            Object.defineProperty(Foo.prototype, "property", {
                                get: function () {
                                    return spy();
                                },
                                enumerable: true,
                                configurable: true
                            });
                            __decorate([
                                __1.default({ ttl: false })
                            ], Foo.prototype, "property", null);
                            return Foo;
                        }());
                        foo = new Foo();
                        spy.called.should.be.false;
                        foo.property.should.equal(123);
                        spy.calledOnce.should.be.true;
                        foo.property.should.equal(123);
                        spy.calledOnce.should.be.true;
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 0); })];
                    case 1:
                        _a.sent();
                        foo.property.should.equal(123);
                        spy.calledTwice.should.be.true;
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle ttl being "async"', function () { return __awaiter(_this, void 0, void 0, function () {
            var values, Foo, foo, _a, a, b, c;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        values = [123, 456];
                        Foo = /** @class */ (function () {
                            function Foo() {
                            }
                            Foo.prototype.getValue = function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10); })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/, values.shift()];
                                        }
                                    });
                                });
                            };
                            __decorate([
                                __1.default({ ttl: 'async' })
                            ], Foo.prototype, "getValue", null);
                            return Foo;
                        }());
                        foo = new Foo();
                        return [4 /*yield*/, Promise.all([foo.getValue(), foo.getValue()])];
                    case 1:
                        _a = _b.sent(), a = _a[0], b = _a[1];
                        a.should.equal(123);
                        b.should.equal(123);
                        return [4 /*yield*/, foo.getValue()];
                    case 2:
                        c = _b.sent();
                        c.should.equal(456);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    context('functions', function () {
        it('should handle functions', function () {
            var spy = Sinon.spy(function () { return 123; });
            var fn = __1.default(function test() {
                return spy();
            });
            spy.called.should.be.false;
            fn().should.equal(123);
            fn.name.should.equal('test');
            spy.calledOnce.should.be.true;
            fn().should.equal(123);
            spy.calledOnce.should.be.true;
        });
    });
});
//# sourceMappingURL=test.js.map