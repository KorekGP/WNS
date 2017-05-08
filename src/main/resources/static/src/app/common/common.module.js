/**
 * Created by eryk on 28.04.17.
 */
import ApiConfigurationService from './service/ApiConfigurationService';

export default angular.module('app.common', [])
    .service('apiConfigurationService', ApiConfigurationService).name;
