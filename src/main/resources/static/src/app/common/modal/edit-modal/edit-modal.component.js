/**
 * Created by eryk on 31.03.17.
 */
import html from './edit-modal.component.html';

class EditModalController {

    constructor($uibModal) {
        this.$uibModal = $uibModal;
    }

    $onInit() {
        this.text = this.resolve.text;
    }

    close() {
        this.modalInstance.close(false);
    }

    save() {
        this.modalInstance.close(this.text)
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
