/**
 * Created by eryk on 02.04.17.
 */
import appAdmin from './admin.component';
import appLogin from './login/login.component';

function appRoutes($stateProvider) {
    'use strict';

    $stateProvider.state('login', {
        url: '/login',
        component: 'appLogin'
    });
}

const adminModule = 'app.admin';

angular.module(adminModule, [])
    .component('appLogin', appLogin)
    .component('appAdmin', appAdmin)
    .config(appRoutes);

export default adminModule;
