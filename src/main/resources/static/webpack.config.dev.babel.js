import webpack from 'webpack';
import Config from 'webpack-config';

module.exports = new Config()
    .extend('./webpack.config.common.babel.js')
    .merge({
        output: {
            pathinfo: true
        },
        debug: true,
        devtool: '#eval',
        entry: {
            bundle: './app/app.module.js',
            vendor: ['angular', 'angular-ui-router'],
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
        ]
    });

