import angular from "angular";
import uirouter from "angular-ui-router";


require('./main.scss');

function appRoutes($stateProvider, $urlRouterProvider) {
    "use strict";
    $urlRouterProvider.when('', '/app');
    $urlRouterProvider.when('/', '/app');

    $stateProvider.state('app', {
        url: '/app',
        component: 'app'
    })

}

const app = angular.module('app', [
    uirouter
]).config(appRoutes);


export default app;
