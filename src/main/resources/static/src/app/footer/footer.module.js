import appFooter from './footer.component';
import appLogin from './login/login.component';

import commonModule from '../common/common.module';
import uibModal from 'angular-ui-bootstrap/src/modal';
import appLoginModal from './login/login-modal/login-modal.component';
import {LoginService} from './login/login.service';

export default angular.module('app.footer', [
    commonModule,
    uibModal
])
    .component('appFooter', appFooter)
    .component('appLogin', appLogin)
    .component('appLoginModal', appLoginModal)
    .service('LoginService', LoginService)
    .run()
    .name;
