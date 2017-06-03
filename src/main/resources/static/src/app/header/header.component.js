/**
 * Created by eryk on 31.03.17.
 */
import headerHtml from './header.component.html';
import headerPath from './header.jpg';
import './header.component.scss';
import {routeUrl} from '../admin/admin.routes';

class HeaderController {

    constructor($uibModal, $state, LoginService) {
        this.chat = true;
        this.navCollapsed = true;
        this.headerPath = headerPath;
        this.$uibModal = $uibModal;
        this.$state = $state;
        this.loginService = LoginService;
    }

    openChat() {
        this.chat = this.chat === false;
    }

    openLoginModal() {
        this.$uibModal.open({
            component: 'appLoginModal',
        });
    }

    openAdmin() {
        this.$state.go(routeUrl);
    }

    logout() {
        this.loginService.logout();
    }

}

export default {
    template: headerHtml,
    controller: HeaderController,
    controllerAs: 'headerCtrl',
};
