// server.js

var app = require('express')();
var morgan = require('morgan');
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');

// configure app
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// configure routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.use(userAuthentication) // set user authentication after login page


app.get('/about', function(req, res) {
    res.send('about page')
})

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact.html');
});
app.post('/contact', function(req, res) {
    console.log(req.body); // we want to see data in console
    res.send('hello ' + req.body.name);
})

// grab user profile && post
app.get('/@:username/:post_slug', checkUser, function(req, res) {
    console.log(req.params);
    res.send('hello ' + req.params.username + '! You are on the ' + req.params.post_slug + ' page.');
})

// make sure user is authenticated
function userAuthentication(req, res, next) {

    // req.params.token
    console.log('user authentication');
    next()
}


// user validation middleware
function checkUser(req, res, next) {
    console.log(req.params, 'middleware log');

    // check database

    // if user exist, then
    next();
}

// configure server
app.listen(port, function() {
    console.log('- server is running and listening on port ' + port + ' -');
});
