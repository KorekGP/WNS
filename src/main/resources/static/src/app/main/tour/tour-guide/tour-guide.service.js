class TourGuideService {

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    getDescriptions(callback) {
        this.$http.get('/description').then(callback);
    }

    editDescriptions(roomId, description, link, callback) {
        this.$http.put('/description/' + roomId + '/' + description + "/" + link).then(callback)
    }
}

export {
    TourGuideService
}

