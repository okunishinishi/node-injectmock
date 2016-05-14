#!/usr/bin/env node

/**
 * Run coverage.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeCovering = require('ape-covering')

apeTasking.runTasks('cover', [
  () => apeCovering.measureCoverage(
    '_mocha', [ '*_test.js' ], {
      dir: 'coverage'
    })
], true)
