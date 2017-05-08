/**
 * Created by eryk on 02.04.17.
 */
import appAdmin from './admin.component';
import appLogin from '../footer/login/login.component';
import commonModule from '../common/common.module';

export default angular.module('app.admin', [commonModule])
    .component('appLogin', appLogin)
    .component('appAdmin', appAdmin).name;
