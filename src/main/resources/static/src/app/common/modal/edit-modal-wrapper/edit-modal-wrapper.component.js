/**
 * Created by eryk on 07.06.17.
 */
import html from './edit-modal-wrapper.component.html';

class EditModalWrapperController {

    /*@ngInject*/
    constructor($uibModal) {
        this.$uibModal = $uibModal;
    }

    openModal() {
        this.modalInstance = this.$uibModal.open({
            component: 'appEditModal',
            resolve: {
                text: () => this.text
            }
        });
        this.modalInstance.result.then((text) => {
            if (text || text === '') {
                this.callback({text});
            }
        });
    }

}

export const EditModalWrapperComponent = {
    bindings: {
        callback: '&',
        text: '<'
    },
    controller: EditModalWrapperController,
    template: html,
};
