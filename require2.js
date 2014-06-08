
var fs   = require('fs')
  , path = require('path')

  , cache = {}

  , get = function(fileName) {
      var file = fs.readFileSync(fileName)
        , fun  = new Function(file)
        , result = fun()

      cache[fileName] = result
      return result
    }

  , require2 = function() {
      var args = Array.prototype.slice.call(arguments)
        , fileName = path.resolve.apply(null, args)

      return cache[fileName] || get(fileName)
    }

module.exports = require2
