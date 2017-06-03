/**
 * Created by eryk on 28.04.17.
 */
import commonModal from './modal/common-modal.module';
import commonPanel from '../common/common-panel/common-panel.component';
import uiRouter from '@uirouter/angularjs';
import {ShakeErrorComponent} from './ui/shake-error/shake-error.component';

export default angular.module('app.common', [
    commonModal,
    uiRouter
])
    .component('appCommonPanel', commonPanel)
    .component('appShakeError', ShakeErrorComponent)
    .name;
