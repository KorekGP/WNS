/**
 * Created by eryk on 28.04.17.
 */
import {LocalStorageManager} from '../../common/service/LocalStorageManager';

const loginHeader = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

class LoginService {

    constructor($http, $rootScope, $state) {
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.$state = $state;
    }

    loginRequest(credentials) {
        return this.$http({
            url: 'login',
            method: 'POST',
            params: credentials,
            paramSerializer: '$httpParamSerializerJQLike',
            headers: loginHeader
        });
    };

    login(credentials, successCallback, failureCallback) {
        this.loginRequest(credentials)
            .then(this.checkUserCallback(successCallback, failureCallback), failureCallback);
    };

    checkUserCallback(successCallback, failureCallback) {
        return () => {
            this.checkUser().then((response) => {
                if (response.data && response.data.username) {
                    LocalStorageManager.login(this.$rootScope, response.data);
                    successCallback();
                } else {
                    LocalStorageManager.logout(this.$rootScope);
                    failureCallback();
                }
            }, failureCallback)
        }

    }

    checkUser() {
        return this.$http.get('checkUser');
    };

    logoutCallback() {
        return () => {
            LocalStorageManager.logout(this.$rootScope);
            this.$rootScope.goStart();
        }
    }

    logout() {
        this.$http.post('logout', {}).then(this.logoutCallback(), this.logoutCallback());
    };

}

export {
    LoginService
}
