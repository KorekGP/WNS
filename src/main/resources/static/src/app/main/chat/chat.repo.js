/**
 * Created by Grzegorz on 23.05.2017.
 */

export class ChatRepository {

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

export default function ($http) {
    return new ChatRepository($http);
}
