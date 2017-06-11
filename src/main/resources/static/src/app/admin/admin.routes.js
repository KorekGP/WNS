/**
 * Created by eryk on 16.05.17.
 */
const routeUrl = 'admin';

function _redirectIfNotAuthenticated($q, $state, $timeout, $rootScope) {
    return $q((resolve, reject) => {
        if ($rootScope.authenticate()) {
            resolve();
        } else {
            reject();
            $timeout(function () {
                $state.go('app');
            });
        }
    }).promise;
}

/*@ngInject*/
function routeConfig($stateProvider) {
    $stateProvider.state(routeUrl, {
        url: '/admin',
        component: 'appAdmin',
        resolve: _redirectIfNotAuthenticated
    });
}

export {
    routeUrl,
    routeConfig
}
