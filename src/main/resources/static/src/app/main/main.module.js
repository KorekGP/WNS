/**
 * Created by eryk on 31.03.17.
 */
import appMain from './main.component';
import appChat from './chat/chat.component';
import appTour from './tour/tour.component';
import appTourInfo from './tour/tour-info/tour-info.component';

export default angular.module('app.main', [])
    .component('appMain', appMain)
    .component('appChat', appChat)
    .component('appTour', appTour)
    .component('appTourInfo', appTourInfo);
