/**
 * Created by Grzegorz on 22.05.2017.
 */
/**
 * Created by Grzegorz on 06.05.2017.
 */
import tourGuide from './tour-guide.component';
import tourComponent from './tour-guide.component';
import commonModule from '../../../common/common.module';
import * as moment from 'moment';
import angularMomentModule from 'angular-moment';
import TourRepository from './tour-guide.repo';


function appRoutes($stateProvider) {
    $stateProvider.state('tourGuide', {
        url: '/tourGuide?buildingID',
        component: 'tourGuide'
    });
}

export default angular.module('tour.guide', [
    commonModule,
    angularMomentModule,
])
    .component('tourGuide', tourComponent)
    .factory('TourRepository', TourRepository)
    .config(appRoutes)
    .name;
