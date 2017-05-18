const path = require('path');
const webpack = require('webpack');
//const isProd = 'production' === process.env.NODE_ENV
//const devtool = isProd ? 'hidden-source-map': 'source-map'
const devtool = 'source-map'

module.exports = {
    entry: {
        main: path.join(__dirname, './app/main.js'),
        vendor: [
            'backbone',
            'backbone-associations',
            'backbone.marionette',
            'backbone.radio',
            'backbone.stickit',
            'jquery'
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
         new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            sourceMap: true
        })
    ],
    devtool: devtool,
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist/views/js')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|dist)/
            }, {
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