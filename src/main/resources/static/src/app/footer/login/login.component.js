/**
 * Created by eryk on 31.03.17.
 */
import loginHtml from './login.component.html';
import './login.component.scss';

class LoginController {

    constructor(loginService) {
        this.loginService = loginService;
        this.passwordSwitch = true;
    }

    switchPassword() {
        this.passwordSwitch = !this.passwordSwitch;
    }

}


export default {
    bindings: {
        credentials: '<'
    },
    controller: LoginController,
    controllerAs: 'modal',
    template: loginHtml,
};
