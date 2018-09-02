//Install express server
const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');
const app = express();
const router = express.Router();
const cors = require('cors');
const request = require('request');
app.options('*', cors());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/login',cors(),  function(req, res) {
  req.get({url: 'clasiixer-server.herokuapp.com/login', headers: req.headers});
  processRewues(req);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send('Req OK');
});

app.post('/api/login',cors(),  function(req, res) {
  req.get({url: 'clasiixer-server.herokuapp.com/login', headers: req.headers});
  processRewues(req);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send('Req OK');
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
