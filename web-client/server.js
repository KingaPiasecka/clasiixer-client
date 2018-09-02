//Install express server
const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');
const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/web-client'));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname+ '/dist/web-client/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
app.use('/proxy', proxy('localhost:12345', {
  proxyReqPathResolver: function(req) {
    return require('url').parse(req.url).path;
  }
}));
