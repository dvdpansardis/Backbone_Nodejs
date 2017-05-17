const path = require('path');
const webpack = require('webpack');
const isProd = 'production' === process.env.NODE_ENV
const devtool = isProd ? 'hidden-source-map': 'source-map'
const BowerResolvePlugin = require("bower-resolve-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, 'app/main/main.js'),
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.ProvidePlugin({
            "_": "underscore"
        })
    ],
    resolve: {
        modules: ["bower_components"],

        alias:{
            'jquery':'./bower_components/jquery/dist/jquery.js',
            'backbone':'./bower_components/underscore/underscore.js'
        }
    },
    devtool: devtool,
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
};