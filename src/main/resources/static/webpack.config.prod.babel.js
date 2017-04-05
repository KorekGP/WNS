import webpack from 'webpack';
import Config from 'webpack-config';
import path from 'path';
import NgAnnotatePlugin from 'ng-annotate-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const nodeModules = path.join(process.cwd(), 'node_modules');

module.exports = new Config().extend('./webpack.config.common.babel.js').merge({
    entry: './index.js',
    output: {
        pathinfo: true,
        filename: '[name].[hash].js'
    },
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
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.AggressiveMergingPlugin(),
        new NgAnnotatePlugin({
            add: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (module) => module.resource && module.resource.startsWith(nodeModules),
            chunks: [
                'main'
            ]
        }),
        new webpack.DefinePlugin({
            'process': {
                WNS_PRODUCTION_ENVIRONMENT: true
            }
        }),
        new ExtractTextPlugin('[name].[hash].css')
    ]
});
