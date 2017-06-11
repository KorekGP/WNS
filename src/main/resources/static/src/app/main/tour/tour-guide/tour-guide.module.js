/**
 * Created by Grzegorz on 06.05.2017.
 */
import CommonModule from '../../../common/common.module';
import {TourGuideService} from './tour-guide.service';
import UibModal from 'angular-ui-bootstrap/src/modal';
import {TourGuideModalComponent} from './tour-guide.component';
import CarouselModule from 'angular-ui-bootstrap/src/carousel';

export default angular.module('tour.guide', [
    CommonModule,
    UibModal,
    CarouselModule
])
    .component('appTourGuideModal', TourGuideModalComponent)
    .service('TourGuideService', TourGuideService)
    .name;
