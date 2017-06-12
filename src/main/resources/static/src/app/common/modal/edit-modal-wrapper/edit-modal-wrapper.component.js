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
                text: () => this.text,
                link: () => this.link
            }
        });
        this.modalInstance.result.then((text, link) => {
            if ((text || text === '')) {
                this.callback({text},{link});
            }
        });
    }

}

export const EditModalWrapperComponent = {
    bindings: {
        callback: '&',
        text: '<',
        link: '<'
    },
    controller: EditModalWrapperController,
    template: html,
};
