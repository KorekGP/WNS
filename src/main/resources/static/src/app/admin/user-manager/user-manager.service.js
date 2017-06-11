/**
 * Created by eryk on 10.05.17.
 */
import User from './user.model';
import acs from '../../common/service/ApiConfigurationService';


const serviceUrl = '/user/';

class UserManagerService {

    /*@ngInject*/
    constructor($resource, $http) {
        this.$http = $http;
        this.User = $resource(acs.constructUrl(serviceUrl + ':userId'), {
            userId: '@id'
        });
    }

    disableUser(userId, callback) {
        this.$http
            .delete(acs.constructUrl(serviceUrl, null, userId))
            .then(callback)
    }

    static jsonToUserArr(arr) {
        const newArr = [];
        for (const user of arr) {
            newArr.push(new User(
                user.userId,
                user.username,
                user.email,
                user.userRole,
                user.enabled
            ));
        }
    }

    editUser(updatedUser, userId) {
        this.User.get({id: userId}, (userToUpdate) => {
            angular.extend(userToUpdate, updatedUser);
            userToUpdate.$save();
        })
    }

    changePassword(changePassword, callback) {
        this
            .$http
            .put(acs
                .constructUrl(serviceUrl, 'change-password'))
            .then(callback);
    }

    addUser(user, callback) {
        new this.User(user).$save(callback);
    }

    getUsers(callback) {
        this.User.query(callback);
    }

}

export default function ($resource, $http) {
    return new UserManagerService($resource, $http);
}
