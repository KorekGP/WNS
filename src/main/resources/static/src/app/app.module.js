import angular from 'angular';
import uiRouter from 'angular-ui-router';
import * as moment from 'moment';
import appRoot from './app.component';
import appHeader from './header/header.component';
import appFooter from './footer/footer.component';
import appAdmin from './admin/admin.component';
import mainModule from './main/main.module';

function appRoutes($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.when('', '/app');
    $urlRouterProvider.when('/', '/app');

    $stateProvider.state('app', {
        url: '/app',
        component: 'app'
    });

    moment.locale('pl-PL');

}

export default angular.module('app', [
    uiRouter,
    mainModule
])
    .component('appRoot', appRoot)
    .component('appHeader', appHeader)
    .component('appFooter', appFooter)
    .component('appAdmin', appAdmin)
    .config(appRoutes);
