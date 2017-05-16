/**
 * Created by eryk on 28.04.17.
 */
import acs from './service/ApiConfigurationService';
import commonModal from './modal/common-modal.module';
import commonPanel from '../common/common-panel/common-panel.component';

export default angular.module('app.common', [
    commonModal
])
    .component('appCommonPanel', commonPanel).name;
