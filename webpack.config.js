const path = require('path');
const webpack = require('webpack');
//const isProd = 'production' === process.env.NODE_ENV
//const devtool = isProd ? 'hidden-source-map': 'source-map'
const devtool = 'source-map'

module.exports = {
    entry: {
        main: path.join(__dirname, './app/main.js'),
        vendor: [
            'jquery',
            'underscore',
            'backbone',
            'backbone-associations',
            'backbone.marionette',
            'backbone.radio',
            'backbone.stickit'
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        })
    ],
    devtool: devtool,
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|dist)/
            },{
                test: /\.html/,
                loader: 'handlebars-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'handlebars': 'handlebars/runtime.js'
        }
    }
};