/**
 * Created by eryk on 28.04.17.
 */
import commonPanel from '../common/common-panel/common-panel.component';
import uiRouter from '@uirouter/angularjs';
import {ShakeErrorComponent} from './ui/shake-error/shake-error.component';
import {CommonModalModule} from './modal/common-modal.module';

export default angular.module('app.common', [
    CommonModalModule,
    uiRouter
])
    .component('appCommonPanel', commonPanel)
    .component('appShakeError', ShakeErrorComponent)
    .name;
