var express = require('express');
var router = express.Router();
var session = require('express-session');

var session = require('express-session');
var UserController = require('../controllers/userController');

router.post('/', (req, res) => {
    sess = req.session;
    var username = req.body.username;
    var password = req.body.password;
    var userController = new UserController();
    userController.getByUsernameAndPassword(username, password, (user => {
        if (user) {
            sess.user = user;
            // delete (user.password);
            res.send(user);
        }
        else {
            res.send(null);
        }
    }))
})


module.exports = router;