var express = require('express');
var router = express.Router();

var UserModel = require('../model/user');
var UserController = require('../controllers/userController');

router.get('/', (req, res) => {
    var userController = new UserController();
    var user = {
        username: 'user',
        password: '1',
        intents: [],
        entities: []
    }

    userController.insert(user)
        .then(success => { res.send(success) })
        .catch(err => { res.send(err) });
})

module.exports = router;