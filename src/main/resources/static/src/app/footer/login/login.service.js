/**
 * Created by eryk on 28.04.17.
 */
import acs from '../../common/service/ApiConfigurationService';
import lsm from '../../common/service/LocalStorageManager';

const loginHeader = {
    'content-type': 'application/x-www-form-urlencoded'
};

class LoginService {

    constructor($http, $httpParamSerializerJQLike, $rootScope) {
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.serializer = $httpParamSerializerJQLike;
    }

    signIn(data) {
        return $http({
            url: acs.constructUrl('login'),
            params: this.serializer(data),
            headers: loginHeader
        });
    };

    logIn(firstLogin) {
        if (lsm.getAuthenticated()) {
            // this.$rootScope.refreshLock = true;
            const netUser = sessionFactory.getUser();
            if (firstLogin || (netUser && netUser.firstLogin)) {
                $state.go('main.resetPassword', {firstLogin: true});
            } else {
                $state.go($rootScope.startState());
            }
            return true;
        }
    };

    authenticate(callback) {
        this.checkUser().then(function (response) {
            if (response.data.username) {
                sessionFactory.setData(response.data);
                $rootScope.refreshLock = true;
            } else {
                $cookies.putObject('authenticated', false);
            }
            if (callback && response.data.rolaId && response.data.rolaId.firstLogin) {
                callback(true);
            } else {
                callback();
            }
        }, function () {
            $rootScope.authenticated = false;
            if (callback) {
                callback();
            }
        });
    };

    checkUser() {
        return $http.get(apiServiceName + 'checkUser');
    };

    logout() {
        this.$http.post('logout', {}).then(function () {
            local
            $cookies.putObject('authenticated', false);
            $state.go('login');
        }, function () {
            $cookies.putObject('authenticated', false);
        });
    };

}

export default function (apiConfigurationService, $http) {
    return new LoginService(apiConfigurationService, $http);
}
