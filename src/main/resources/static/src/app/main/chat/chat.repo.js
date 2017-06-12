/**
 * Created by Grzegorz on 23.05.2017.
 */

class ChatRepository {

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    getMessages(callback) {
        this.$http.get('/chat').then(callback);
    }

    sendMessages(content, callback) {
        this.$http.post('/chat', {
            content: content
        }).then(callback)
    }


}

export {
    ChatRepository
};
