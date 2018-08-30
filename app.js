const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const path = require('path');
const webpackConfig = require('./webpack.config.js');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const complier = webpack(webpackConfig);

app.use(bodyParser.json({ limit: '4000mb' }));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '4000mb'
}));
app.use(express.static('./public'));

var mongoose = require('mongoose');
app.use(middleware(complier, {
    publicPath: webpackConfig.output.publicPath
}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/aidb', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Error: ', err);
    }
})

var login = require('./src/server/routers/login');
var signUp = require('./src/server/routers/signup');

app.use('/login', login);
app.use('/signup', signUp);



const PORT = 3000;

app.listen(PORT, () => {
    console.log('listening to : ', PORT);
})
