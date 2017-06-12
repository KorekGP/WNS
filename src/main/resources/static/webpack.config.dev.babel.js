var Config = require('webpack-config').Config;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new Config()
    .extend('./webpack.config.common.babel.js')
    .merge({
        output: {
            filename: '[name].js'
        },
        devtool: 'eval',
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
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Wydział Nauk Społecznych - Wirtualny spacer',
                template: 'index.ejs',
                favicon: 'favicon.ico',
                inject: 'body'
            }),
        ]
    });

