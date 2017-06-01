/**
 * Created by eryk on 31.03.17.
 */
import loginHtml from './login.component.html';
import './login.component.scss';

class LoginController {

    constructor() {
        this.passwordSwitch = true;
    }

    switchPassword() {
        this.passwordSwitch = !this.passwordSwitch;
    }

}


export default {
    bindings: {
        credentials: '<',
        shakeError: '<'
    },
    controller: LoginController,
    controllerAs: 'modal',
    template: loginHtml,
};
