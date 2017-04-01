import Config from 'webpack-config';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = new Config().merge({
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    context: path.join(__dirname, '/src'),
    module: {
        loaders: [{
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            exclude: /(node_modules)/
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap&sourceComments'
        }, {
            test: /\.(eot|woff|woff2|ttf|png|svg|jpg)$/,
            loader: 'url-loader?limit=300'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.html$/,
            loader: 'ng-cache-loader?prefix=[dir]/[dir]'
        }, {
            test: /\.js$/,
            loader: 'babel-loader?presets[]=es2015',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js', '.scss', '.html']
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            title: 'Wydział Nauk Społecznych - Wirtualny spacer',
            template: 'index.ejs',
            inject: 'body'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    failOnWarning: false,
                    failOnError: false,
                    fix: false,
                    quiet: false,
                },
            },
        }),
    ]
});
