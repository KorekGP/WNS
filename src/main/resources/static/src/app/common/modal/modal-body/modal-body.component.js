/**
 * Created by eryk on 31.03.17.
 */
import html from './modal-body.component.html';

class ModalBodyController {

    /*@ngInject*/
    constructor($uibModal) {
        this.$uibModal = $uibModal;
    }

}

export default {
    bindings: {
        resolve: '<?'
    },
    controller: ModalBodyController,
    controllerAs: 'modal',
    template: html,
    transclude: true
};
