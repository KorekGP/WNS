/**
 * Created by Grzegorz on 23.05.2017.
 */

import ApiConfigurationService from '../../common/service/ApiConfigurationService';
class ChatService {

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
        this.url = ApiConfigurationService.constructUrl('chat');
    }

    getMessages(callback) {
        this.$http.get(this.url)
            .then(callback);
    }

    sendMessage(message, callback) {
        message.id = null;
        this.$http.post(this.url, message)
            .then(callback)
    }

}

export {
    ChatService
};
