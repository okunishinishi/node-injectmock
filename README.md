injectmock
=====

Parse function arguments. Useful to implement variadic functions.

<!-- Badge start -->

[![Build Status][my_travis_badge_url]][my_travis_url]
[![Code Climate][my_codeclimate_badge_url]][my_codeclimate_url]
[![Code Coverage][my_codeclimate_coverage_badge_url]][my_codeclimate_url]
[![npm version][my_npm_budge_url]][my_npm_url]

Usage
-----

Call `injectmock(module, key, mock);` to to inject mock value and, `injectmock.restoreAll();` to undo all injections.
 

```javascript
/**
 * This an example inject mock for nodeunit test.
 */

var injectmock = require('injectmock');

exports.setUp = function(done) {
    injectmock(console, 'log', function mockLog(){
        // Mock console.log here.
    });
    done();    
}

exports.tearDown = function(done) {
    injectmock.restoreAll();    
    done();
};


```


Advanced
-----

### Restore specific mock.

Use `injectmock.restore(module, key);` to restore a specific mock. 

```javascript
var injectmock = require('injectmock');
var noop = function noop(){}; //Do nothing.
injectmock(console, 'log', noop);  
injectmock(console, 'error', noop);

/* ~ */
injectmock.restore(console, 'log'); //Restore log only.

```

### Custom context.

Call `injectmock.new()` to create new injectmock, which has separated mock stack. 

```javascript
var injectmock = require('injectmock'),
    injectmock01 = injectmock.new(),
    injectmock02 = injectmock.new();
```




Installation
-----

```bash
npm install injectmock --save-dev
```


License
-------
This software is released under the [MIT License][my_license_url].



<!-- Links start -->

[nodejs_url]: http://nodejs.org/
[npm_url]: https://www.npmjs.com/
[nvm_url]: https://github.com/creationix/nvm
[bitdeli_url]: https://bitdeli.com/free
[my_bitdeli_badge_url]: https://d2weczhvl823v0.cloudfront.net/okunishinishi/node-injectmock/trend.png
[my_repo_url]: https://github.com/okunishinishi/node-injectmock
[my_travis_url]: http://travis-ci.org/okunishinishi/node-injectmock
[my_travis_badge_url]: http://img.shields.io/travis/okunishinishi/node-injectmock.svg?style=flat
[my_license_url]: https://github.com/okunishinishi/node-injectmock/blob/master/LICENSE
[my_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-injectmock
[my_codeclimate_badge_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-injectmock.svg?style=flat
[my_codeclimate_coverage_badge_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-injectmock.svg?style=flat
[my_apiguide_url]: http://okunishinishi.github.io/node-injectmock/apiguide
[my_lib_apiguide_url]: http://okunishinishi.github.io/node-injectmock/apiguide/module-injectmock_lib.html
[my_coverage_url]: http://okunishinishi.github.io/node-injectmock/coverage/lcov-report
[my_coverage_report_url]: http://okunishinishi.github.io/node-injectmock/coverage/lcov-report/
[my_gratipay_url]: https://gratipay.com/okunishinishi/
[my_gratipay_budge_url]: http://img.shields.io/gratipay/okunishinishi.svg?style=flat
[my_npm_url]: http://www.npmjs.org/package/injectmock
[my_npm_budge_url]: http://img.shields.io/npm/v/injectmock.svg?style=flat
[my_tag_url]: http://github.com/okunishinishi/node-injectmock/releases/tag/
[my_tag_badge_url]: http://img.shields.io/github/tag/okunishinishi/node-injectmock.svg?style=flat

<!-- Links end -->
