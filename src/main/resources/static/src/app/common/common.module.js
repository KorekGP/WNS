/**
 * Created by eryk on 28.04.17.
 */
import acs from './service/ApiConfigurationService';
import commonModal from './modal/common-modal.module';

export default angular.module('app.common', [
    commonModal
])
    .factory('apiConfigurationService', acs).name;
