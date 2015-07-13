/**
 * Test for injectmock.
 * Runs with nodeunit.
 */

"use strict";

var injectmock = require('./injectmock');


exports['Inject and restore.'] = function (test) {
    var mockObj = {
        foo: 'bar'
    };
    injectmock(mockObj, 'foo', 'bar2');
    test.equal(mockObj.foo, 'bar2');
    injectmock(mockObj, 'foo', 'bar3');
    test.equal(mockObj.foo, 'bar3');
    injectmock.restore(mockObj, 'foo');
    test.equal(mockObj.foo, 'bar2');
    injectmock.restoreAll();
    test.equal(mockObj.foo, 'bar');
    injectmock.restore(mockObj, '__invalid__');
    test.done();
};