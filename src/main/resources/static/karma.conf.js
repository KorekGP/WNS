const path = require('path');
const webpackConfig = require('./webpack.config.test');
const karmaWebpack = require('karma-webpack');

const entry = './src/test.js';
const testPath = 'src/app/**/*.spec.js';

const webpackPreprocessor = ['webpack', 'sourcemap'];

const preprocessors = {};
preprocessors[entry] = webpackPreprocessor;
preprocessors[testPath] = webpackPreprocessor;

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all img (eg. files, exclude)
        basePath: '',

        frameworks: ['jasmine'],

        // list of files/img to load in the browser
        files: [
            entry,
            testPath,
        ],

        webpack: webpackConfig,

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: preprocessors,

        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        plguins: [
            karmaWebpack
        ]
    });
};
