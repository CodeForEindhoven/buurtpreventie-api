function clientErrorHandler(err, req, res, next) {
  var errobj = {};
  errobj.url = req.protocol + "://" + req.get('host') + req.url;
  errobj.body = req.body;
  errobj.query = req.query;
  errobj.params = req.params;
  res.status(500);
  res.json({
    type: 'error',
    request: JSON.stringify(errobj),
    error: err
  });
}

// To run in production: NODE_ENV=production

var express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  path = require('path'),
  compress = require('compression');
var env = process.env.NODE_ENV || 'development';
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(compress());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(require('./controllers'));
app.use(function(req, res) {
  res.status(404).json({type: 'error', message: req.method + ' not available for this endpoint'});
});
app.use(clientErrorHandler);
if ('development' == env) {
  app.locals.pretty = true;
}

if ('production' == env) {
  app.locals.pretty = false;
}

function start() {
  app.listen(app.get('port'), function() {
    console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
  });

}
exports.start = start;
exports.app = app;
