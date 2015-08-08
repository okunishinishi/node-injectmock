/**
 * This an example inject mock for nodeunit test.
 */

var injectmock = require('injectmock');

// Disable console.log before test started.
exports.setUp = function (done) {
    function mockLog() {
    }

    // Inject `mockLog` as `console.log`.
    injectmock(console, 'log', mockLog);

    done();
};

// Disable console.log before test done.
exports.tearDown = function (done) {
    // Restore all injected.
    injectmock.restoreAll();

    console.log('Now I am back!');

    done();
};
