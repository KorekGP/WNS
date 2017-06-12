/**
 * Created by eryk on 31.03.17.
 */
import html from './edit-modal.component.html';

class EditModalController {

    /*@ngInject*/
    constructor($uibModal) {
        this.$uibModal = $uibModal;
    }

    $onInit() {
        this.text = this.resolve.text;
        this.link = this.resolve.link;
    }

    close() {
        this.modalInstance.close(false);
    }

    save() {
        this.modalInstance.close(this.text, this.link)
    }

}

export const EditModalComponent = {
    bindings: {
        resolve: '<',
        modalInstance: '<'
    },
    controller: EditModalController,
    template: html,
};
