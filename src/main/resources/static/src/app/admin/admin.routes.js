/**
 * Created by eryk on 16.05.17.
 */
const routeUrl = 'admin';

function routeConfig($stateProvider) {
    $stateProvider.state(routeUrl, {
        url: '/admin',
        component: 'appAdmin'
    });
}

export  {
    routeUrl,
    routeConfig
}
