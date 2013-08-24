
var test = require('tape')
var require2 = require('../require2')

test('simple', function(t) {
  var m = require2(__dirname, './module.js')

  t.equal(m, 'beep boop')

  t.end()
})
