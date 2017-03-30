const WebpackConfig = require("webpack-config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = new WebpackConfig().merge({
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    context: path.join(__dirname, '/app'),
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/
            }
        ],
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css?sourceMap!sass?sourceMap&sourceComments'
        }, {
            test: /\.(eot|woff|woff2|ttf|png|svg|jpg)$/,
            loader: 'url-loader?limit=300'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.html$/,
            loader: 'ng-cache?prefix=[dir]/[dir]'
        }, {
            test: /\.js$/,
            loader: 'babel?presets[]=es2015',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            title: 'Wydział Nauk Społecznych - Wirtualny spacer',
            template: 'index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            {from: 'index.html', to: 'index.html'}
        ])
    ]
});
