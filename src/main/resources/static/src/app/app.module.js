import angular from 'angular';
import uiRouter from 'angular-ui-router';
import * as moment from 'moment';
import appRoot from './app.component';
import appHeader from './header/header.component';
import appFooter from './footer/footer.component';
import appAdmin from './admin/admin.component';
import mainModule from './main/main.module';
import ngAnimate from 'angular-animate';
import ngTouch from 'angular-touch';

function init() {
    moment.locale('pl-PL');
}

export default angular.module('app', [
    uiRouter,
    ngAnimate,
    ngTouch,
    mainModule
])
    .component('appRoot', appRoot)
    .component('appHeader', appHeader)
    .component('appFooter', appFooter)
    .component('appAdmin', appAdmin)
    .run(init);
