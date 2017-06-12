/**
 * Created by eryk on 17.05.17.
 */
import commonModule from '../../common/common.module';
import {ChatComponent} from './chat.component';
import * as moment from 'moment';
import angularMomentModule from 'angular-moment';
import 'angular-simple-chat';
import 'angular-simple-chat/dist/angular-simple-chat.min.css';
import {ChatService} from './chat.service';
import {UserService} from '../../common/service/UserService';

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
    .component('appChat', ChatComponent)
    .service('ChatService', ChatService)
    .service('UserService', UserService)
    .run(momentInit)
    .run()
    .name;
