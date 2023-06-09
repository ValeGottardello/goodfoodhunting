const methodOverride = require('method-override')


//methodOverride is a function wich return another function
const callback = methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
})

module.exports = callback
