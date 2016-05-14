/**
 * Test for injectmock.
 * Runs with mocha.
 */
'use strict'

const injectmock = require('./injectmock')
const assert = require('assert')

describe('injectmock', function () {
  it('Inject and restore.', () => {
    let mockObj = {
      foo: 'bar'
    }, mockObj2 = {
      baz: 'quz'
    }
    injectmock(mockObj, 'foo', 'bar2')

    assert.equal(mockObj.foo, 'bar2')
    injectmock(mockObj, 'foo', 'bar3')
    assert.equal(mockObj.foo, 'bar3')
    injectmock.restore(mockObj, 'foo')
    assert.equal(mockObj.foo, 'bar2')

    injectmock(mockObj2, 'quzz', 'bar2')
    assert.equal(mockObj2.quzz, 'bar2')

    injectmock.restoreAll()
    assert.ok(!mockObj2.hasOwnProperty('quzz'))
    assert.equal(mockObj.foo, 'bar')

    injectmock.restore(mockObj, '__invalid__')
  })
})

/* global describe, it */
