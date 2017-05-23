/**
 * Created by eryk on 31.03.17.
 */
import chatHtml from './chat.component.html';
import './chat.component.scss';

class chatController {

    constructor($http) {
        let messages = {};
        $http.get('/chat').then(function (data) {
            messages = data;
        })
    }

    sendMessage() {
        $http.post('/chat', {
            content: this.content
        }).then(
            function (data) {
                console.log(data);
            }
        )
    }
}

export default {
    template: chatHtml,
    controller: chatController,
    controllerAs: 'chatCtrl'
};
