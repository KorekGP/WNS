/**
 * Created by Grzegorz on 23.05.2017.
 */

class ChatService {

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    getMessages(callback) {
        this.$http.get('/chat')
            .then(callback);
    }

    sendMessage(message, callback) {
        message.id = null;
        this.$http.post('/chat', message)
            .then(callback)
    }

}

export {
    ChatService
};
