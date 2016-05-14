/**
 * This an example inject mock for mocha test.
 */
'use strict'

const injectmock = require('injectmock')

describe('My test', function () {
  // Disable console.log before test started.
  before((done) => {
    function mockLog () {
    }

    // Inject `mockLog` as `console.log`.
    injectmock(console, 'log', mockLog)
    done()
  })

  // Disable console.log before test done.
  after((done) => {
    // Restore all injected.
    injectmock.restoreAll()

    console.log('Now I am back!')
    done()
  })
})

/* global describe, before, after */
