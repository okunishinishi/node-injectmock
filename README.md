injectmock
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-injectmock
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-injectmock
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-injectmock.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-injectmock/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-injectmock
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-injectmock.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-injectmock.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-injectmock
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-injectmock.svg
[bd_npm_url]: http://www.npmjs.org/package/injectmock
[bd_npm_shield_url]: http://img.shields.io/npm/v/injectmock.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Inject mock and restore original for javascript property.  Useful for unit testing.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "docs/readme/01.Installation.md.hbs" Start -->

<a name="section-docs-readme-01-installation-md"></a>
Installation
-----

```bash
npm install injectmock --save-dev
```

<!-- Section from "docs/readme/01.Installation.md.hbs" End -->

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
Usage
----

Injecting mock:

```javascript
var injectmock = require('injectmock');
injectmock(myModule, 'myFunction', myMockFunction);
```

Restoring Original:

```javascript
injectmock.restoreAll();
```

<!-- Section from "docs/readme/02.Usage.md.hbs" End -->

<!-- Section from "docs/readme/03.Examples.md.hbs" Start -->

<a name="section-docs-readme-03-examples-md"></a>
Examples
-----

Work with nodeunit setUp/tearDown method:

```javascript
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

```

<!-- Section from "docs/readme/03.Examples.md.hbs" End -->

<!-- Section from "docs/readme/04.API.md.hbs" Start -->

<a name="section-docs-readme-04-a-p-i-md"></a>
API Guide
-----

#### `injectmock(module, key, value)`

Inject a mock to module.


#### `injectmock.restore(module, key)`

Restore an injected.


#### `injectmock.restoreAll()`

Restore all injected.


#### `injectmock.new()`

Returns a new `injectmock` context, which has separated mock stacks.


#### `injectmock.noop()`

Do nothing. You can use this method as mock to do nothing.

<!-- Section from "docs/readme/04.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-injectmock/blob/master/LICENSE).

<!-- LICENSE End -->


