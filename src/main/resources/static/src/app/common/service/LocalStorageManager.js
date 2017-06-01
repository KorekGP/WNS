/**
 * Created by eryk on 14.05.17.
 */

const USER_KEY = 'user';

let user = null;

function init($rootScope, $state) {
    user = localStorage.getItem(USER_KEY);
    $rootScope.authenticated = !!user;
    $rootScope.goStart = () => {
        $state.go('app');
    };
}

class LocalStorageManager {

    static login($rootScope, newUser) {
        $rootScope.authenticated = true;
        user = newUser;
        localStorage.setItem(USER_KEY, newUser);
    }

    static logout($rootScope) {
        $rootScope.authenticated = false;
        localStorage.removeItem(USER_KEY);
    }

    static getUser($rootScope) {
        if (!$rootScope.authenticated) {
            return null;
        }
        if (!user) {
            user = localStorage.getItem(USER_KEY);
        }
        return user;
    }

}

export {
    LocalStorageManager,
    init
};
