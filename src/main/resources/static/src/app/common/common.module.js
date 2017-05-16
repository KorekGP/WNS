/**
 * Created by eryk on 28.04.17.
 */
import commonModal from './modal/common-modal.module';
import commonPanel from '../common/common-panel/common-panel.component';
import uiRouter from '@uirouter/angularjs';

export default angular.module('app.common', [
    commonModal,
    uiRouter
])
    .component('appCommonPanel', commonPanel)
    .name;
