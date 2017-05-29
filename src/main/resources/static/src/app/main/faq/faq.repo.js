export class FaqRepository {

    constructor($http) {
        this.$http = $http;
    }

    getFaqs(callback) {
        this.$http.get('/faq').then(callback);
    }

    sendFaq(content, description, callback) {
        this.$http.post('/faq', {
            title: title,
            description: description
        }).then(callback)
    }


}

export default function ($http) {
    return new FaqRepository($http);
}
