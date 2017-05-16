/**
 * Created by eryk on 28.04.17.
 */
/**
 * Created by eryk on 31.03.17.
 */
import html from './login-modal.component.html';
import '../login.component.scss';

class LoginModalController {

    constructor() {
        //
    }

    login() {

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
