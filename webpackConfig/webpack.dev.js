'use strict';
const path = require("path");
const TodoConfig = require("./modules/todoConfig");

//var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const config = {
    context: path.join(__dirname, "../app"),
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
                // plugins: ["transform-runtime"]
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            }
        ],
    },
    // plugins: [
    //     new HardSourceWebpackPlugin()
    // ]
};

const todoConfig = Object.assign({}, config, TodoConfig.config);

if (typeof process.env.module !== 'undefined')
    module.exports = [eval(process.env.module)];
else
    module.exports = [todoConfig];
