// server.js
var app = require('express')();
var morgan = require('morgan');
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');

// app config
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// routes config

// index route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(userAuth); // check user

// user route
app.get('/@:username/:post_slug', checkUser, function(req, res) {
    console.log(req.params);

    // grab username && post
    res.send('hello ' + req.params.username + ' welcome to your ' + req.params.post_slug);
});

// about page
app.get('/about', function(req, res) {
    res.send('about page');
});



// 404 page
app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/404.html');
});


// global app authentication
function userAuth(req, res, next) {
    console.log('authentication');
    next();
}


// authentication middleware
function checkUser(req, res, next) {
    console.log(req.params, 'this is the middleware');

    // mongo checkUser
    // var user.User.findOne({ username.params.username});
    // if (! user) {
    // dosomething
    // } else
    // do another thing
    next();
    // }

}

// server config
app.listen(port, function() {
    console.log('app is running ' + port);
});;
