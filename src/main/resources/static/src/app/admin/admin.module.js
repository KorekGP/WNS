/**
 * Created by eryk on 02.04.17.
 */
import appAdmin from './admin.component';
import commonModule from '../common/common.module';

export default angular.module('app.admin', [
    commonModule
])
    .component('appAdmin', appAdmin).name;
