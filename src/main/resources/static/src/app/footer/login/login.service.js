/**
 * Created by eryk on 28.04.17.
 */
class LoginService {

    constructor($http) {
        this.$http = $http;
    }
}

export default function ($http) {
    return new LoginService($http);
}
