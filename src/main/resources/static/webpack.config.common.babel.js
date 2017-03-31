import Config from 'webpack-config';
import path from 'path';
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
            loader: 'eslint-loader',
            exclude: /(node_modules)/
        }, {
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
            template: 'index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([{
            from: 'index.html',
            to: 'index.html'
        }])
    ]
});
