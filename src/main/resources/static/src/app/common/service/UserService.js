/**
 * Created by eryk on 12.06.17.
 */

import {LocalStorageManager} from './LocalStorageManager';
import md5 from 'blueimp-md5';


const IP_INFO_URL = '//freegeoip.net/json/?callback=?';
const SALT = '9Pu8GnYX';

class UserService {

    /*@ngInject*/
    constructor($http) {
        this.manager = LocalStorageManager;
        this.userPromise = $http.get(IP_INFO_URL).then(this.userCallback())
    }

    userCallback() {
        return response => {
            return md5(response.data + navigator.userAgent + SALT)
        }
    }

}

export {
    UserService
}
