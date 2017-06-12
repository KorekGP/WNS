/**
 * Created by eryk on 28.04.17.
 */
import uibModal from 'angular-ui-bootstrap/src/modal';
import modalHeader from './modal-header/modal-header.component';
import modalBody from './modal-body/modal-body.component';
import modalFooter from './modal-footer/modal-footer.component';
import completeModal from './complete-modal/complete-modal.component';
import {EditModalComponent} from './edit-modal/edit-modal.component';
import {EditModalWrapperComponent} from './edit-modal-wrapper/edit-modal-wrapper.component';

export const CommonModalModule = angular.module('app.common.modal', [
    uibModal
])
    .component('appEditModalWrapper', EditModalWrapperComponent)
    .component('appEditModal', EditModalComponent)
    .component('appCompleteModal', completeModal)
    .component('appModalHeader', modalHeader)
    .component('appModalBody', modalBody)
    .component('appModalFooter', modalFooter).name;
