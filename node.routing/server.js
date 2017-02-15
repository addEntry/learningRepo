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

// configure server
app.listen(port, function() {
    console.log('- server is running and listening on port ' + port + ' -');
});
