/**
 * Created by eryk on 31.03.17.
 */
import headerHtml from './header.component.html';
import headerPath from './header.jpg';
import './header.component.scss';

class HeaderController {

    constructor($uibModal) {
        this.chat = true;
        this.navCollapsed = true;
        this.headerPath = headerPath;
        this.$uibModal = $uibModal;
    }

    openChat() {
        this.chat = this.chat === false;
    }

    openLoginModal() {
        this.$uibModal.open({
            component: 'appLoginModal',
        });
    }

}

export default {
    template: headerHtml,
    controller: HeaderController,
    controllerAs: 'headerCtrl',
};
