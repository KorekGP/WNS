var Config = require('webpack-config').Config;
var webpack = require('webpack');
var path = require('path');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeModules = path.join(process.cwd(), 'node_modules');

module.exports = new Config().extend('./webpack.config.common.babel.js').merge({
    entry: './index.prod.js',
    output: {
        pathinfo: true,
        filename: '[name].[hash].js'
    },
    devtool: 'no-sources-sourcemap',
    module: {
        rules: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        sourceComments: true
                    }
                }]
            })
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true
                    }
                }]
            })
        }]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.AggressiveMergingPlugin(),
        new NgAnnotatePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (module) => module.resource && module.resource.startsWith(nodeModules),
            chunks: [
                'main'
            ]
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new HtmlWebpackPlugin({
            title: 'Wydział Nauk Społecznych - Wirtualny spacer',
            template: 'index.prod.ejs',
            favicon: 'favicon.ico',
            inject: 'body'
        })
    ]
});
