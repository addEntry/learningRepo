var express = require('express');
var router = express.Router();
var path = require('path');

// export Router
module.exports = router;

// apply routes
// index route
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// app.use(userAuth); // check user

// user route
router.get('/@:username/:post_slug', /*checkUser,*/ function(req, res) {
    console.log(req.params);

    // grab username && post
    res.send('hello ' + req.params.username + ' welcome to your ' + req.params.post_slug);
});

// about page
router.get('/about', function(req, res) {
    res.send('about page');
});



// 404 page
router.use(function(req, res, next) {
    res.status(404);
    res.sendFile(path.join(__dirname, '../404.html'));
});
