
var fs   = require('fs')
  , path = require('path')

  , require2 = function() {
      var args = Array.prototype.slice.call(arguments)
        , fileName = path.resolve.apply(null, args)
        , file = fs.readFileSync(fileName)

      var res = new Function(file)

      return res()
    }

module.exports = require2
