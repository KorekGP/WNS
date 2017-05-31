/**
 * Created by Grzegorz on 06.05.2017.
 */
import appFaq from './faq.component.js';
import commonModule from '../../common/common.module';
import faqComponent from './faq.component';
import angularMomentModule from 'angular-moment';
import FaqRepository from './faq.repo';


function appRoutes($stateProvider) {
    $stateProvider.state('faq', {
        url: '/faq',
        component: 'appFaq'
    });
}

export default angular.module('app.faq', [
    angularMomentModule,
    commonModule
])
    .component('appFaq', faqComponent)
    .factory('FaqRepository', FaqRepository)
    .config(appRoutes)
    .name;
