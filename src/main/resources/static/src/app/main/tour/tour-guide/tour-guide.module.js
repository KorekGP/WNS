/**
 * Created by Grzegorz on 22.05.2017.
 */
/**
 * Created by Grzegorz on 06.05.2017.
 */
import tourGuide from './tour-guide.component';
import commonModule from '../../../common/common.module';
import tourComponent from './tour-guide.component';

function appRoutes($stateProvider) {
    $stateProvider.state('tourGuide', {
        url: '/tourGuide?buildingID',
        component: 'tourGuide'
    });
}

export default angular.module('tour.guide', [
    commonModule
])
    .component('tourGuide', tourComponent)
    .config(appRoutes)
    .name;
