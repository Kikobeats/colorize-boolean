'use strict'

chalk = require 'chalk'

module.exports = (_keyword) ->
  expected: (_expected) ->
    actual: (_actual) ->
      _keyword ||= _expected
      return _keyword if process.env.NODE_ENV is 'production'
      color = if _expected is _actual then 'green' else 'red'
      chalk[color](_keyword)
