/**
 * Created by eryk on 31.03.17.
 */
import appMain from './main.component';
import appChat from './chat/chat.component';
import appTour from './tour/tour.component';
import appTourInfo from './tour/tour-info/tour-info.component';
import appDescription from './description/description.component';

function appRoutes($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.when('', '/app');
    $urlRouterProvider.when('/', '/app');

    $stateProvider.state('app', {
        url: '/app',
        component: 'appMain'
    });
}


const mainModule = 'app.main';

angular.module(mainModule, [])
    .component('appMain', appMain)
    .component('appChat', appChat)
    .component('appTour', appTour)
    .component('appDescription', appDescription)
    .component('appTourInfo', appTourInfo)
    .config(appRoutes);

export default mainModule;
