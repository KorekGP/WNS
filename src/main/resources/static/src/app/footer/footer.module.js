import appFooter from './footer.component';
import appLogin from './login/login.component';
import loginService from './login/login.service';
import commonModule from '../common/common.module';
import uibModal from 'angular-ui-bootstrap/src/modal';
import appLoginModal from './login/login-modal/login-modal.component';

export default angular.module('app.footer', [
    commonModule,
    uibModal
])
    .component('appFooter', appFooter)
    .component('appLogin', appLogin)
    .component('appLoginModal', appLoginModal)
    .factory('loginService', loginService).name;
