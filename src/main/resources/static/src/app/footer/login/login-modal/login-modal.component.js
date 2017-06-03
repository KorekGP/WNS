/**
 * Created by eryk on 28.04.17.
 */
/**
 * Created by eryk on 31.03.17.
 */
import html from './login-modal.component.html';
import '../login.component.scss';

const WRONG_PASS_MSG = 'Błędny login lub hasło';

class LoginModalController {

    constructor($state, LoginService) {
        this.credentials = {};
        this.shakeError = {};
        this.$state = $state;
        this.loginService = LoginService;
    }

    _successCallback() {
        return () => {
            this.modalInstance.close();
        }
    };

    _failureCallback() {
        return () => {
            this.shakeError.shake(WRONG_PASS_MSG);
        }
    };


    login() {
        this.loginService.login(
            this.credentials,
            this._successCallback(),
            this._failureCallback()
        );
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
