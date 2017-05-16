import angular from 'angular';
import * as moment from 'moment';
import appRoot from './app.component';
import appHeader from './header/header.component';
import appAdmin from './admin/admin.component';
import mainModule from './main/main.module';
import adminModule from './admin/admin.module';
import ngAnimate from 'angular-animate';
import ngTouch from 'angular-touch';
import ngResource from 'angular-resource';
import uiBootstrapCollapse from 'angular-ui-bootstrap/src/collapse';
import footerModule from './footer/footer.module';

function init() {
    moment.locale('pl-PL');
}

export default angular.module('app', [
    ngAnimate,
    ngTouch,
    ngResource,
    uiBootstrapCollapse,
    mainModule,
    adminModule,
    footerModule
])
    .component('appRoot', appRoot)
    .component('appHeader', appHeader)
    .component('appAdmin', appAdmin)
    .run(init);
