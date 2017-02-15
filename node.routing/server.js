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
app.use(require('./app/routes'));

/*
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
*/

// server config
app.listen(port, function() {
    console.log('app is running ' + port);
});;
