class TourGuideService {

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    getDescriptions(callback) {
        this.$http.get('/description').then(callback);
    }

    editDescriptions(id, description, link, callback) {
        this.$http.put('/description', {
            id, description, link
        }).then(callback)
    }
}

export {
    TourGuideService
}

