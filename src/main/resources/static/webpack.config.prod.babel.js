import webpack from 'webpack';
import Config from 'webpack-config';
import NgAnnotatePlugin from 'ng-annotate-webpack-plugin';

module.exports = new Config().extend('./webpack.config.common.babel.js').merge({
    entry: './app/app.module.js',
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
        })
    ]
});
