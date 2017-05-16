/**
 * Created by eryk on 09.05.17.
 */
import './index.js';

angular.module('app').config(($compileProvider) => {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
});
