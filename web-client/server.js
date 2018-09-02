//Install express server
const express = require('express');
const path = require('path');

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

const getPath = req => require('url').parse(req.url).path;

const createProxy = ({hostname = 'clasiixer-client.herokuapp.com', path = ''}) =>
  +  proxy(`${hostname}`, { proxyReqPathResolver: req => `${path}${getPath(req)}` });

/*app.use('/api', createProxy({port: 3000, path: '/api'}));*/
