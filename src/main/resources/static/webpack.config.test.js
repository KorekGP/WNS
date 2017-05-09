var Config = require('webpack-config').Config;
var webpack = require('webpack');

module.exports = new Config()
    .extend('./webpack.config.common.babel.js')
    .merge({
        output: {
            pathinfo: true,
            filename: 'bundle.js'
        },
        devtool: 'inline-source-map',
        entry: {
            bundle: './index.js'
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sourceComments: true
                    }
                }]
            }, {
                test: /\.css$/,
                loader: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }]
        }
    });

