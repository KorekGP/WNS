var Config = require('webpack-config').Config;
import webpack from 'webpack';

module.exports = new Config()
    .extend('./webpack.config.common.babel.js')
    .merge({
        output: {
            pathinfo: true,
            filename: 'bundle.js'
        },
        devtool: 'source-map',
        entry: {
            bundle: './index.js',
            vendor: [
                'angular'
            ]
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
            new webpack.LoaderOptionsPlugin({
                debug: true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.bundle.js'
            })
        ]
    });

