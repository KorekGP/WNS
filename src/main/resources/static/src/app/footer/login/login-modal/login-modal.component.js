/**
 * Created by eryk on 28.04.17.
 */
/**
 * Created by eryk on 31.03.17.
 */
import html from './login-modal.component.html';
import '../login.component.scss';
import {routeUrl} from '../../../admin/admin.routes'

class LoginModalController {

    constructor($state) {
        this.credentials = {};
        this.$state = $state;
    }

    login() {
        if (this.credentials.username === 'admin' && this.credentials.password === 'admin') {
            this.$state.go(routeUrl);
        }
    }

}


export default {
    bindings: {
        modalInstance: '<?'
    },
    controller: LoginModalController,
    controllerAs: 'modal',
    template: html,
};