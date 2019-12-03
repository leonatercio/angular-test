//Install express server
const express = require('express');
const app = express();

const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
};
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-test'));

const path = require('path');

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/angular-test/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);