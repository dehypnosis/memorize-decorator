"use strict";
/*
  Memorize Decorator v0.2
  https://github.com/vilic/memorize-decorator
*/
Object.defineProperty(exports, "__esModule", { value: true });
var asap = require("asap");
var multikey_map_1 = require("multikey-map");
function decorateFunction(fn, options) {
    return buildIntermediateFunction(fn, options);
}
function memorize(fn, options) {
    if (typeof fn === 'function') {
        return decorateFunction(fn, options);
    }
    else {
        options = fn;
    }
    return function (_target, _name, descriptor) {
        var getter = descriptor.get;
        var value = descriptor.value;
        var fn;
        var descriptorItemName;
        if (getter) {
            fn = getter;
            descriptorItemName = 'get';
        }
        else if (typeof value === 'function') {
            fn = value;
            descriptorItemName = 'value';
        }
        else {
            throw new TypeError('Invalid decoration');
        }
        return _a = {
                configurable: descriptor.configurable,
                enumerable: descriptor.enumerable
            },
            _a[descriptorItemName] = buildIntermediateFunction(fn, options),
            _a;
        var _a;
    };
}
exports.memorize = memorize;
exports.default = memorize;
function buildIntermediateFunction(originalFn, _a) {
    var _b = (_a === void 0 ? {} : _a).ttl, ttl = _b === void 0 ? 3600000 : _b;
    var cacheMap = new multikey_map_1.default();
    var name = originalFn.name;
    var nameDescriptor = Object.getOwnPropertyDescriptor(fn, 'name');
    if (nameDescriptor.configurable) {
        Object.defineProperty(fn, 'name', { value: name });
    }
    else if (nameDescriptor.writable) {
        fn.name = name;
    }
    return fn;
    function fn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var keys = [this, JSON.stringify(args)];
        var _a = cacheMap.hasAndGet(keys), hasCache = _a[0], cache = _a[1];
        if (!hasCache) {
            cache = originalFn.apply(this, args);
            cacheMap.set(keys, cache);
            if (ttl === 'async') {
                // tslint:disable-next-line:no-floating-promises
                Promise.resolve(cache).then(function () { return cacheMap.delete(keys); });
            }
            else if (ttl !== Infinity) {
                if (ttl === false) {
                    asap(function () { return cacheMap.delete(keys); });
                }
                else {
                    setTimeout(function () { return cacheMap.delete(keys); }, ttl);
                }
            }
        }
        // return cloned object
        return cache.then
            ? cache.then(function (cache) {
                return (typeof cache == 'object' && cache !== null)
                    ? JSON.parse(JSON.stringify(cache))
                    : cache;
            })
            : (typeof cache == 'object' && cache !== null)
                ? JSON.parse(JSON.stringify(cache))
                : cache;
    }
}
//# sourceMappingURL=index.js.map