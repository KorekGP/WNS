/**
 * Created by Grzegorz on 06.05.2017.
 */
import appFaq from './faq.component.js';

function appRoutes($stateProvider) {
    'use strict';

    $stateProvider.state('faq', {
        url: '/faq',
        component: 'appFaq'
    });
}
