/**
 * Created by Grzegorz on 06.05.2017.
 */
import tourGuide from './tour-guide.component';
import tourComponent from './tour-guide.component';
import CommonModule from '../../../common/common.module';
import {TourGuideService} from './tour-guide.service';
import CarouselModule from 'angular-ui-bootstrap/src/carousel';

function appRoutes($stateProvider) {
    $stateProvider.state('tourGuide', {
        url: '/tourGuide?buildingID',
        component: 'tourGuide'
    });
}

export default angular.module('tour.guide', [
    CommonModule,
    CarouselModule
])
    .component('tourGuide', tourComponent)
    .service('TourGuideService', TourGuideService)
    .config(appRoutes)
    .name;
