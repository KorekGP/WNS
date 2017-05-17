/**
 * Created by eryk on 17.05.17.
 */
import commonModule from '../../common/common.module';
import appChat from './chat.component';
import * as moment from 'moment';
import angularMomentModule from 'angular-moment';
import 'angular-simple-chat';
import 'angular-simple-chat/dist/angular-simple-chat.min.css';

const simpleChatModule = 'angular-simple-chat';

function momentInit(amMoment) {
    moment.locale('pl-PL');
    amMoment.changeLocale('pl');
}

export default angular.module('app.chat', [
    angularMomentModule,
    commonModule,
    simpleChatModule
])
    .component('appChat', appChat)
    .run(momentInit)
    .run()
    .name;
