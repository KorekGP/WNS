import angular from 'angular';
import uiRouter from 'angular-ui-router';
import * as moment from 'moment';
import appRoot from './app.component';
import appHeader from './header/header.component';
import appFooter from './footer/footer.component';
import appAdmin from './admin/admin.component';
import mainModule from './main/main.module';
import adminModule from './admin/admin.module';
import ngAnimate from 'angular-animate';
import ngTouch from 'angular-touch';
import uiBootstrapCollapse from 'angular-ui-bootstrap/src/collapse';

function init() {
    moment.locale('pl-PL');
}

function config($compileProvider) {
    if (process.env.NODE_ENV === 'production') {
        $compileProvider.debugInfoEnabled(false);
        $compileProvider.commentDirectivesEnabled(false);
        $compileProvider.cssClassDirectivesEnabled(false);
    }
}

export default angular.module('app', [
    uiRouter,
    ngAnimate,
    ngTouch,
    uiBootstrapCollapse,
    mainModule,
    adminModule
])
    .component('appRoot', appRoot)
    .component('appHeader', appHeader)
    .component('appFooter', appFooter)
    .component('appAdmin', appAdmin)
    .run(init)
    .config(config);
