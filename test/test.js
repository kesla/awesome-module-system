
var test = require('tape')
var require2 = require('../awesome-module-system')

test('simple', function(t) {
  var m = require2(__dirname, './module.js')

  t.equal(m, 'beep boop')

  t.end()
})

test('caching', function(t) {
  var m1 = require2(__dirname, './module2.js')
  var m2 = require2(__dirname, './module2.js')

  t.equal(m1, m2)

  t.end()
})
