class TourGuideService {

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    getDescriptions(callback) {
        this.$http.get('/description').then(callback);
    }

    editDescriptions(roomId, description, callback) {
        this.$http.put('/description/' + roomId + '/' + description).then(callback)
    }
}

export {
    TourGuideService
}

