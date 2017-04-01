import Config from 'webpack-config';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

module.exports = new Config().merge({
    output: {
        path: path.join(__dirname, '../public')
    },
    context: path.join(__dirname, '/src'),
    module: {
        rules: [{
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            exclude: /(node_modules)/
        }, {
            test: /\.(eot|woff|woff2|ttf|png|svg|jpg)$/,
            loader: 'url-loader?limit=10000'
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
        extensions: ['.js', '.scss', '.html', '.css']
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(['public'], {
            root: path.join(process.cwd(), '..'),
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            title: 'Wydział Nauk Społecznych - Wirtualny spacer',
            template: 'index.ejs',
            favicon: 'favicon.ico',
            inject: 'body'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    failOnWarning: false,
                    failOnError: false,
                    fix: false,
                    quiet: false,
                }
            }
        }),
    ]
});
