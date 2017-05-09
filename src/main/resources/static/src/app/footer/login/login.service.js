/**
 * Created by eryk on 28.04.17.
 */
class LoginService {

    constructor(apiConfigurationService, $http) {
        this.apiConfigurationService = apiConfigurationService;
        this.$http = $http;
    }
}

export default function (apiConfigurationService, $http) {
    return new LoginService(apiConfigurationService, $http);
}
