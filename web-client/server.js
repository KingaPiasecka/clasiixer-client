//Install express server
const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');
const app = express();
const router = express.Router();

const request = require('request');
app.use(app.router);

app.use(function (req, res, next) {
  req.root = req.protocol + '://' + 'clasiixer-server.herokuapp.com/login' + '/';
  next();
});


/*
router.get('/api/!*', function(req, res){

  request('https://clasiixer-server.herokuapp.com/login', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body)
  });

});
*/

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/web-client'));
app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname+ '/dist/web-client/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
