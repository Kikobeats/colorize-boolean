colorizeBoolean = require '..'
should          = require 'should'

describe 'colorize boolean ::', ->

  it 'just provide two param', ->
    console.log colorizeBoolean().expected(true).actual(false)

  it 'just provide three params', ->
    console.log colorizeBoolean('human').expected(true).actual(true)

  it 'avoid under production', ->
    process.env.NODE_ENV = 'production'
    console.log colorizeBoolean().expected(true).actual(false)


