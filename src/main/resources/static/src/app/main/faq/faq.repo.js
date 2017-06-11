class FaqRepository {

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    getFaqs(callback) {
        this.$http.get('/faq').then(callback);
    }

    sendFaq(title, description, callback) {
        this.$http.post('/faq', {
            title: title,
            description: description
        }).then(callback)
    }


}

export {
    FaqRepository
}
