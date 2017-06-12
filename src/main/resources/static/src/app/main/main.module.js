/**
 * Created by eryk on 31.03.17.
 */
import appMain from './main.component';
import {TourComponent} from './tour/tour.component';
import appTourInfo from './tour/tour-info/tour-info.component';
import appDescription from './description/description.component';
import uiRouter from '@uirouter/angularjs';
import commonModule from '../common/common.module';
import chatModule from './chat/chat.module';
import {init} from '../common/service/LocalStorageManager.js';

function appRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/app');
    $urlRouterProvider.when('/', '/app');

    $stateProvider.state('app', {
        url: '/app',
        component: 'appMain'
    });
}

export default angular.module('app.main', [
    uiRouter,
    commonModule,
    chatModule
])
    .component('appMain', appMain)
    .component('appTour', TourComponent)
    .component('appDescription', appDescription)
    .component('appTourInfo', appTourInfo)
    .config(/*@ngInject*/appRoutes)
    .run(init).name;
