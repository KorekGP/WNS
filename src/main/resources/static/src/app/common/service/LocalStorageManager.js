/**
 * Created by eryk on 14.05.17.
 */

const AUTH_KEY = 'auth';

class LocalStorageManager {

    static setAuthenticated(auth) {
        localStorage.setItem(AUTH_KEY, auth);
    }

    static getAuthenticated() {
        return localStorage.getItem(AUTH_KEY);
    }

}

export default LocalStorageManager;
