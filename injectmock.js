/**
 * Inject mock property to object(or module).
 * Useful to inject mock on unittest and restore safely after done.
 * @function injectmock
 * @param {object} module - Module to injected.
 * @param {string} key - Injection key.
 * @param {*} value - Value to inject.
 */

/**
 * Restore injected.
 * @name injectmock.restore
 * @function
 * @param {object} module - Module to injected.
 * @param {string} key - Injection key.
 */

/**
 * Restore all injected.
 * @name injectmock.restoreAll
 * @function
 */

"use strict";


/**
 * Inject mock functions to node modules.
 * @memberof injectmock
 * @inner
 * @constructor Injector
 */
function Injector() {
    var s = this;
    s.injections = [];
}
Injector.prototype = {
    /**
     * Inject a mock to a module.
     * @param {object} module - Module to injected.
     * @param {string} key - Injection key.
     * @param {*} value - Value to inject.
     * @returns {*} - Returns self.
     */
    inject: function (module, key, value) {
        var s = this;
        s.injections.unshift({
            module: module,
            key: key,
            delete: !module.hasOwnProperty(key),
            origin: module[key],
            value: value
        });
        module[key] = value;
        return s;
    },
    /**
     * Restore injected.
     * @param {object} module - Module to injected.
     * @param {string} key - Injection key.
     * @returns {*} - Returns self.
     */
    restore: function (module, key) {
        var s = this;
        var index = s._indexOfInjection(module, key);
        var injection = s.injections[index];
        if (injection) {
            if (injection.delete) {
                delete module[key];
            } else {
                module[key] = injection.origin;
            }
            s.injections.splice(index, 1);
        } else {
            // Do nothing.
        }
        return s;
    },
    /**
     * Restore all injected.
     * @returns {*} - Returns self.
     */
    restoreAll: function () {
        var s = this;
        while (s.injections.length) {
            var injection = s.injections[0];
            s.restore(injection.module, injection.key);
        }
        return s;
    },
    _indexOfInjection: function (module, key) {
        var s = this;
        for (var i = 0, len = s.injections.length; i < len; i++) {
            var injection = s.injections[i],
                hit = (injection.key === key) && (injection.module === module);
            if (hit) {
                return i;
            }
        }
        return -1;
    }
};

function context() {
    var injector = new Injector();
    var inject = injector.inject.bind(injector);
    inject.restore = injector.restore.bind(injector);
    inject.restoreAll = injector.restoreAll.bind(injector);
    return inject;
}

var injectmock = context();

/**
 * Create new injectmock context.
 * @name injectmock.new
 * @function
 * @returns {injectmock} - New injectmock context.
 */
injectmock.new = context;
/**
 * Do nothing.
 */
injectmock.noop = function () {

};

module.exports = injectmock;