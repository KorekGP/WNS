import Config from 'webpack-config';
import webpack from 'webpack';

export default new Config()
    .extend('./webpack.config.common.babel.js')
    .merge({
        output: {
            pathinfo: true
        },
        devtool: '#eval',
        entry: {
            bundle: './app/app.module.js',
            vendor: ['angular', 'angular-ui-router'],
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

