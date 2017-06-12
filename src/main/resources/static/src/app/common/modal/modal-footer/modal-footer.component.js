/**
 * Created by eryk on 31.03.17.
 */
import html from './modal-footer.component.html';

class CommonModalController {

    /*@ngInject*/
    constructor($uibModal) {
        this.$uibModal = $uibModal;
    }

    openLoginModal() {
        // this.modalInstance = this.$uibModal.open({
        //     component: 'appLogin'
        // });
    }

}

export default {
    controller: CommonModalController,
    controllerAs: 'commonModal',
    template: html,
};
