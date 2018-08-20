// import express from 'express';
// import graphQLHTTP from 'express-graphql';
// import path from 'path';
// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';
// import {clean} from 'require-clean';
// import {exec} from 'child_process';
// import mongoose from 'mongoose';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const mongoose = require('mongoose');
const path = require('path');

mongoose.Promise = global.Promise;
// const config = require('./config')[env];

const APP_PORT = 3000;
// const GRAPHQL_PORT = 8080;
// let graphQLServer;
let appServer;
function startAppServer() {
    // Serve the Relay app
    const compiler = webpack({
        entry: "./src/index.js",
        mode: "development",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    options: { presets: ['env'] }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {}
                        }
                    ]
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, "dist/"),
            publicPath: "/dist/",
            filename: "bundle.js"
        }
    });
    appServer = new WebpackDevServer(compiler, {
        contentBase: path.join(__dirname, "public/"),
        port: APP_PORT,
        // https: true,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true,
        historyApiFallback: true
    });
    // Serve static resources
    // appServer.use('/', express.static(path.resolve(__dirname, 'public')));
    appServer.listen(APP_PORT, () => {
        console.log(`App is now running on http://localhost:${APP_PORT}`);
        // if (callback) {
        //     callback();
        // }
    });
}
// function startGraphQLServer(callback) {
//     // Expose a GraphQL endpoint
//     clean('./data/schema');
//     // location of root mongoose schema file
//     const { Schema } = require('./data/schema');
//     const graphQLApp = express();
//     graphQLApp.use('/', graphQLHTTP({
//         graphiql: true,
//         pretty: true,
//         schema: Schema,
//     }));
//     graphQLServer = graphQLApp.listen(GRAPHQL_PORT, () => {
//         console.log(`GraphQL server is now running on http://localhost:${GRAPHQL_PORT}`);
//         if (callback) {
//             callback();
//         }
//     });
// }
function openDatabaseConnection() {

    mongoose.connect('mongodb://localhost:27017/aidb', { useNewUrlParser: true }, (err) => {
        if (err) {
            console.log('Error: ', err);
        }
    })
    // mongoose.connect(config.database, (err) => {
    //     if (err) {
    //         console.log('Error when connecting:', err);
    //     } else {
    //         console.log('Server connected to the database.');
    //     }
    // });
}
function startServers() {
    // Shut down the servers
    if (appServer) {
        appServer.listeningApp.close();
    }
    // if (graphQLServer) {
    //     graphQLServer.close();
    // }

    // Compile the schema
    // exec('npm run update-schema', (error, stdout) => {
    //     console.log(stdout);
    //     let doneTasks = 0;
    //     function handleTaskDone() {
    //         doneTasks++;
    //         if (doneTasks === 2 && callback) {
    //             callback();
    //         }
    //     }
    //     startGraphQLServer(handleTaskDone);
    //     startAppServer();
    //     openDatabaseConnection();
    // });
    startAppServer();
    openDatabaseConnection();
}

startServers();