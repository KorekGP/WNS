/**
 * Created by eryk on 31.03.17.
 */
import footerHtml from './footer.component.html';
import './footer.component.scss';

class FooterController {

    constructor($uibModal) {
        this.$uibModal = $uibModal;
    }

    openLoginModal() {
        this.$uibModal.open({
            component: 'appLoginModal',
        });
    }

}

export default {
    controller: FooterController,
    controllerAs: 'footerCtrl',
    template: footerHtml,
};
